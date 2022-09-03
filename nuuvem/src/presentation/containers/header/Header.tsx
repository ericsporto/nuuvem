import React from 'react'
import { TextStyled } from '../../components/text/Text.styles'

export default function Header() {
  return (
    <div className="flex h-24 w-full bg-primaryMain hover:bg-primaryDark px-4 py-3 items-center justify-end md:justify-center">
      <div className='w-[60%] text-center'>
        <TextStyled variant="title">Chuck Norris Jokes</TextStyled>
      </div>
    </div>
  )
}
