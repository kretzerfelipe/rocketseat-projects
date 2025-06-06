import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  :focus-visible {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['blue-500']};
  }

  body {
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
  }
`