import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import { darkTheme } from './styles/themes/dark'

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
