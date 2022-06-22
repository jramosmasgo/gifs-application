import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./styles/themes/dark";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
