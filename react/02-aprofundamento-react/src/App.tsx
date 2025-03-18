import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/globals'
import { darkTheme } from './styles/themes/dark'

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
