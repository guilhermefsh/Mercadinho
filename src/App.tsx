import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/globalstyle"

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </>
  )
}

export default App
