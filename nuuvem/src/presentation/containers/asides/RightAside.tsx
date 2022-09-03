import React from 'react'
import { IJokes } from '../../../interfaces/jokes.interface'
import { TextStyled } from '../../components/text/Text.styles'

export interface IProps {
  textJokes: IJokes
}

export default function RightAside({ textJokes }: IProps) {

  return (
    <div className="md:w-[50%] flex flex-col justify-center items-center mt-5 px-4 text-center">

      {textJokes?.result.length > 0 ? (
        <TextStyled variant="titleBlue">Have Fun!!!!</TextStyled>
      ) : textJokes?.result.length === 0 ? (
        <TextStyled variant="subTilte">Ops.... try again!</TextStyled>
      ) : null}

      {textJokes?.result?.map((joke) => (
        <div key={joke.id} className="px-4 py-2 border-blue-800">
          <TextStyled variant="subTitle">{joke.value}</TextStyled>
          <TextStyled>
            Create at: {new Date(joke.created_at).toLocaleDateString('en')}
          </TextStyled>
          <TextStyled>
            Update at: {new Date(joke.updated_at).toLocaleDateString('en')}
          </TextStyled>
        </div>
      ))}
    </div>
  )
}
