import Link from 'next/link'
import React from 'react'
import { TextStyled } from '../../components/text/Text.styles'

export default function Footer() {
  return (
    <div className="w-full bg-black h-16 flex justify-center items-center">
      <Link href={'https://www.linkedin.com/in/ericsporto/'}>
        <TextStyled variant="textFooter">
          By Eric Carvalho - September 2022
        </TextStyled>
      </Link>
    </div>
  )
}
