import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/globalstyle";
import { ProductsProvider } from "./context/ProductsContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AuthProvider>
        <ProductsProvider>
          <RouterProvider router={Router} />
        </ProductsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
