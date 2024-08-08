import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/globalstyle";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function App() {
  return (

    <ThemeProvider>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <AuthProvider>
          <CartProvider>
            <RouterProvider router={Router} />
          </CartProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
