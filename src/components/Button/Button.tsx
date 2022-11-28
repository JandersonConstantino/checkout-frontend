import { StyledButton, StyledLabel } from './Button.styles'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export function Button({ label, ...props }: IButtonProps) {
  return (
    <StyledButton {...props}>
      <StyledLabel>{label}</StyledLabel>
    </StyledButton>
  )
}
