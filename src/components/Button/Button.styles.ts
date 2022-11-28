import styled from 'styled-components'

export const StyledButton = styled.button(({ theme }) => ({
  width: '320px',
  height: '60px',
  borderRadius: '3px',
  boxShadow: `0 -3px 0 0 ${theme.colors.primaryDark}, 0 2px 4px 0 rgba(0,0,0,0.25)`,
  backgroundColor: theme.colors.primary,
  '&:hover': {
    backgroundColor: theme.colors.primaryDark,
  },
}))

export const StyledLabel = styled.label(({ theme }) => ({
  fontWeight: 'bold',
  size: '20px',
  lineHeight: '24px',
  letterSpacing: '.5px',
  textAlign: 'center',
  color: theme.colors.white,
}))
