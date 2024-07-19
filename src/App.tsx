import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/globalstyle"
import { ProductsProvider } from "./context/ProductsContext"

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <ProductsProvider>
          <RouterProvider router={Router} />
        </ProductsProvider>
      </ThemeProvider>
    </>
  )
}

export default App
