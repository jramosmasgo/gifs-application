import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { generatetheme } from "./styles/themes/dark";

function App() {
  const themeValues = useSelector((state) => state.theme.value);
  const [theme, setTheme] = useState(generatetheme(themeValues));

  useEffect(() => {
    setTheme(generatetheme(themeValues));
  }, [themeValues]);

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
