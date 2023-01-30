import { ThemeProvider } from "styled-components"
import { PostContextProvider } from "./contexts/PostContext"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
      )
}

