import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/globalstyle";
import { ProductsProvider } from "./context/ProductsContext";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ProductsProvider>
        <RouterProvider router={Router} />
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;
