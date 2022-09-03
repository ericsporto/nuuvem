import { SearchIcon } from '@heroicons/react/outline'
import React, { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledSearchInput = styled.input.attrs({
  className:
    'block w-full h-10 leading-normal rounded-r-lg  focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-900 ring-opacity-90  text-gray-900 font-medium aa-input border border-l-0 border-gray-300 px-2'
})(() => tw``)

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  field?: string
  props?: React.ComponentPropsWithoutRef<'input'>
}

// eslint-disable-next-line react/display-name
const SearchInput: FC<IInputProps> = React.forwardRef<
  HTMLInputElement,
  IInputProps
>(({ type, value, onChange, disabled, label, className, ...rest }, ref) => {
  return (
    <div className={'flex w-full rounded-md shadow-sm' + className}>
      <span className="inline-flex h-10 items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm bg-primaryDark">
        <SearchIcon className="h-4 w-4 text-white" />
      </span>
      <StyledSearchInput
        ref={ref}
        disabled={disabled}
        type={type}
        placeholder="Write here... "
        value={value || undefined}
        onChange={onChange}
        id={label}
        {...rest}
      />
    </div>
  )
})
export default SearchInput
