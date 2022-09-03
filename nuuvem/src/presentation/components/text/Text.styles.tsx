import styled from 'styled-components'
import tw from 'twin.macro'

export interface ITextSytledProps {
  variant: 'title' | 'subTitle' | 'paragraph' | 'titleBlue' | 'textFooter'
}

export const TextStyled = styled.p(({ variant }: ITextSytledProps) => [
  variant === 'title' && tw`text-2xl sm:text-3xl text-white font-bold break-words`,
  variant === 'titleBlue' && tw`text-3xl text-white font-bold text-primaryMain`,
  variant === 'subTitle' && tw`text-lg text-black font-semibold break-words`,
  variant === 'paragraph' && tw`text-sm font-semibold break-words`,
  variant === 'textFooter' && tw`text-lg font-semibold text-white cursor-pointer hover:text-gray-400`
])
