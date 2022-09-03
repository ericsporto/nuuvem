import styled from 'styled-components'
import tw from 'twin.macro'

export interface IButtonStyledProps {
variant:
| 'primary'
| 'secondary'
onClick?: () => void
className?: string
}

export const ButtonStyled = styled.button(
({ variant, className }: IButtonStyledProps) => [
tw`px-6 w-full py-2 px-4 h-10 justify-center items-center rounded-lg font-medium text-sm flex focus:ring-indigo-500 focus:ring-offset-indigo-200 transition ease-in duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer`,
variant === 'primary' && tw`bg-primaryMain text-white hover:bg-primaryDark`,
variant === 'secondary' &&
tw`bg-white border border-gray-300 text-gray-700 px-4`,
className
]
)