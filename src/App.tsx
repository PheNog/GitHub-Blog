import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { HomeBlog } from "./pages/HomeBlog"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HomeBlog />
    </ThemeProvider>
  )
}

