import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import { darkTheme } from './styles/themes/dark'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
