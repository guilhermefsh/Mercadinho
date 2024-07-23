import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/globalstyle"
import { ProductsProvider } from "./context/ProductsContext"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <ProductsProvider>
          <ToastContainer position="top-center" />
          <RouterProvider router={Router} />
        </ProductsProvider>
      </ThemeProvider>
    </>
  )
}

export default App
