import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'core/theme'
import { ReactElement } from 'react'

const AllTheProviders = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
