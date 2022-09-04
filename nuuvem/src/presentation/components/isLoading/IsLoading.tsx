import styled from 'styled-components'
import tw from 'twin.macro'

export const IsLoading = styled.div(() => [
  tw`flex w-5 h-5 px-2 border-2 rounded-full border-t-white animate-spin cursor-not-allowed justify-center items-center`
])
