import { render, screen, fireEvent } from 'tests'
import userEvent from '@testing-library/user-event'

import { theme } from 'core/theme'
import { Button } from './Button'

describe('Button', () => {
  it('onClick must be invoked when button is clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick} label="My button" />)

    const button = screen.getByText('My button')
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('button must render correctly when onClick is not passed', () => {
    render(<Button label="My button" />)
    const button = screen.getByText('My button')
    expect(button).toBeDefined()
  })

  it('background color must be primary color', () => {
    render(<Button label="My button" aria-label="my button aria" />)
    const button = screen.getByLabelText('my button aria')
    expect(button).toHaveStyleRule(`background-color: ${theme.colors.primary}`)
  })

  it('background color must be changed when button is hover', () => {
    render(<Button label="My button" aria-label="my button aria" />)
    const button = screen.getByLabelText('my button aria')
    userEvent.hover(button)

    expect(button).toHaveStyleRule(
      `background-color: ${theme.colors.primaryDark}`
    )
  })
})
