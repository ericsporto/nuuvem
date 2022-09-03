import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useGetRandomJokes } from '../../../infra/query/useGetRandomJokes'
import { IJokes } from '../../../interfaces/jokes.interface'
import { ButtonStyled } from '../../components/button/Button.styles'
import SearchInput from '../../components/input/InputSearch.styles'
import { TextStyled } from '../../components/text/Text.styles'

export interface IJokesProps {
  setRandomJokes?: Dispatch<SetStateAction<IJokes>>
  setOpen: Dispatch<SetStateAction<boolean>>
  text: string
  setText: Dispatch<SetStateAction<string>>
  getTextJokes: () => void
}

export default function LeftAside({
  setRandomJokes,
  setOpen,
  setText,
  getTextJokes
}: IJokesProps) {
  const { data, refetch } = useGetRandomJokes()

  function getRandomJokes() {
    refetch()
    data && setRandomJokes(data)
  }

  useEffect(() => {
    getRandomJokes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="md:w-[50%] flex flex-col justify-start items-center px-4 mt-5">
      <div className="flex space-x-4">
        <div className="w-full">
          <SearchInput
            onChange={(e) => setText(e.target.value)}
            maxLength={120}
          />
        </div>
        <div className="">
          <ButtonStyled onClick={getTextJokes} variant="primary">
            Search
          </ButtonStyled>
        </div>
      </div>
      <div className="text-center mt-5">
        <TextStyled variant="paragraph">or</TextStyled>
      </div>
      <div className="text-center mt-5 flex flex-col items-center w-full">
        <TextStyled variant="subTitle">
          How about trying your RANDOM luck?
        </TextStyled>
        <div className="w-[50%] mt-2">
          <ButtonStyled
            onClick={() => {
              getRandomJokes(), setOpen(true)
            }}
            variant="primary"
          >
            Try? Click here!
          </ButtonStyled>
        </div>
      </div>
      {}
    </div>
  )
}
