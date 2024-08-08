import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/globalstyle";
import { ProductsProvider } from "./context/ProductsContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const client = new QueryClient();

function App() {
  return (

    <ThemeProvider>
      <GlobalStyle />
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <AuthProvider>
            <ProductsProvider>
              <RouterProvider router={Router} />
            </ProductsProvider>
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
