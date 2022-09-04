import { NextPage } from 'next/types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { IJokes } from 'src/interfaces/jokes.interface'
import { DivContainer } from 'src/presentation/components/divContainer/DivContainer'
import JokesModal from 'src/presentation/components/modal/Modal'
import LeftAside from 'src/presentation/containers/asides/LeftAside'
import RightAside from 'src/presentation/containers/asides/RightAside'

import Header from 'src/presentation/containers/header/Header'
import { api } from 'src/services/api'
import ChuckImage from 'src/assets/chuckImage.png'
import Image from 'next/image'
import { Container } from 'src/presentation/components/divContainer/Container'
import Footer from 'src/presentation/containers/footer/Footer'

const Home: NextPage = () => {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [randomJokes, setRandomJokes] = useState<IJokes>()
  const [textJokes, setTextJokes] = useState<IJokes>()
  const [isLoading, setIsLoading] = useState(false)


  // Responsible to get Jokes using input text as required query. Only axios to fetch in this case.
  async function getTextJokes() {
    setIsLoading(true)
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
    } finally {
      setIsLoading(false)
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
          textJokes={textJokes}
          isLoading={isLoading}
        />
        <RightAside textJokes={textJokes} />
      </Container>
      <Footer />
    </DivContainer>
  )
}
export default Home
