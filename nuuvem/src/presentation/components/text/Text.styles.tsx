import styled from 'styled-components'
import tw from 'twin.macro'

export interface ITextSytledProps {
  variant?: 'title' | 'subTitle' | 'paragraph' | 'titleBlue' | 'textFooter'
  className?: string
}

export const TextStyled = styled.p(({ variant, className }: ITextSytledProps) => [
  variant === 'title' && tw`text-2xl sm:text-3xl text-white font-bold`,
  variant === 'titleBlue' && tw`text-3xl text-white font-bold text-primaryMain`,
  variant === 'subTitle' && tw`text-lg text-black font-semibold`,
  variant === 'paragraph' && tw`text-sm font-semibold`,
  variant === 'textFooter' && tw`text-lg font-semibold text-white cursor-pointer hover:text-gray-400`,
  className
])
