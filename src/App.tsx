import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/globalstyle";
import { ProductsProvider } from "./context/ProductsContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "./context/ThemeContext";


function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <ProductsProvider>
        <ToastContainer position="top-center" />
        <RouterProvider router={Router} />
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;
