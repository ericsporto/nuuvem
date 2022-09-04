import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'


describe('header', () => {
  it('Show the Title', () => {
    render(<Header />)
    const ckeckTitle = screen.getByText(/Chuck Norris Jokes/i)
    expect(ckeckTitle).toBeInTheDocument()
  })
})
