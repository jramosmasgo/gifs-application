import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./styles/themes/dark";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
