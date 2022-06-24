import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { generatetheme } from "./styles/themes/dark";

function App() {
  const themeValues = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={generatetheme(themeValues)}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
