import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/router";
import { GlobalStyle } from "./styles/globalstyle";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { AppThemeProvider } from "./styles/themes/ThemeProvider";


function App() {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </AppThemeProvider>
    </Provider>
  );
}

export default App;
