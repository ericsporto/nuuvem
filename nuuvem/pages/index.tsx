import { NextPage } from 'next/types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { IJokes } from '../src/interfaces/jokes.interface'
import { DivContainer } from '../src/presentation/components/divContainer/DivContainer'
import JokesModal from '../src/presentation/components/modal/Modal'
import LeftAside from '../src/presentation/containers/asides/LeftAside'
import RightAside from '../src/presentation/containers/asides/RightAside'
import Footer from '../src/presentation/containers/footer/Footer'
import Header from '../src/presentation/containers/header/Header'
import { api } from '../src/services/api'
import ChuckImage from '../src/assets/chuckImage.png'
import Image from 'next/image'
import { Container } from '../src/presentation/components/divContainer/Container'
import { useGetTextJokes } from '../src/infra/query/useGetTextJokes'

const Home: NextPage = () => {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [randomJokes, setRandomJokes] = useState<IJokes>()
  const [textJokes, setTextJokes] = useState<IJokes>()

  const { data } = useGetTextJokes()

  async function getTextJokes() {
    try {
      const response = await api.get<IJokes>(`/search?query=${text}`)
      setTextJokes(response.data)
    } catch (error) {
      const errorMessage = error.response?.data?.message

      if (errorMessage?.includes('tamanho deve estar entre 3 e 120')) {
        toast.warning(
          'Your search must contain between 3 and 120 characters, try again!'
        )
      }
    }
  }

  return (
    <DivContainer>
      <Header />
      <Container>
        <div className="absolute top-4 left-3">
          <Image src={ChuckImage} width={130} height={100} alt="chuck image" />
        </div>
        <JokesModal open={open} setOpen={setOpen} randomJokes={randomJokes} />
        <LeftAside
          setRandomJokes={setRandomJokes}
          setOpen={setOpen}
          text={text}
          setText={setText}
          getTextJokes={getTextJokes}
        />
        <RightAside textJokes={textJokes} />
      </Container>
      <Footer />
    </DivContainer>
  )
}
export default Home
