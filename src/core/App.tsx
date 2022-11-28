import 'core/i18n-config'
import 'core/axios-config'

import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>App.js</h1>
    </ThemeProvider>
  )
}
