import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  render(<App />)
})

describe('render all important elements', () => {
  test('renders the first input', () => {
    const firstInputEl = screen.getByTestId(/firstNumber/i)
    expect(firstInputEl).toBeInTheDocument()
  })

  test('renders the second input', () => {
    const secondInputEl = screen.getByTestId(/secondNumber/i)
    expect(secondInputEl).toBeInTheDocument()
  })

  test('renders the submit button', () => {
    const submitButtonEl = screen.getByTestId(/submitButton/i)
    expect(submitButtonEl).toBeInTheDocument()
  })
})

describe('test functionality', () => {
  test('should change input value', () => {
    const input = screen.getByTestId(/firstNumber/i) as HTMLInputElement
    fireEvent.change(input, { target: { value: '5' } })
    expect(input.value).toBe('5')
  })

  test('should trigger submit form', () => {
    const button = screen.getByTestId(/submitButton/i) as HTMLButtonElement
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    fireEvent.submit(button)
    expect(window.alert).toHaveBeenCalledTimes(1)
  })

  test('should set 2 and 12 as values and submit, get 4 as result', () => {
    const firstInput = screen.getByTestId(/firstNumber/i) as HTMLInputElement
    fireEvent.change(firstInput, { target: { value: '2' } })
    const secondInput = screen.getByTestId(/secondNumber/i) as HTMLInputElement
    fireEvent.change(secondInput, { target: { value: '12' } })
    const button = screen.getByTestId(/submitButton/i) as HTMLButtonElement

    jest.spyOn(window, 'alert').mockImplementation((result) => result)
    fireEvent.submit(button)
    expect(window.alert).toHaveLastReturnedWith('The number of divisibles is 4')
  })
})
