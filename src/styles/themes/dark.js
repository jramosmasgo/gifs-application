import { createTheme } from "@mui/material/styles";

const darkTheme = {
  background: "#232931",
  paper: "#393E46",
  white: "#EEEEE",
};

const lightTheme = {
  background: "#E7E7E7",
  paper: "#EBEBEB",
  white: "#EEEEE",
};

const listThemes = [
  {
    name: "dark",
    theme: darkTheme,
  },
  {
    name: "light",
    theme: lightTheme,
  },
];

const colorThemes = [
  {
    name: "green",
    color: "#4ECCA3",
  },
  {
    name: "red",
    color: "#B41D1D",
  },
];

export function generatetheme({ themeName, colorName } = {}) {
  if (localStorage.getItem("themePreferences")) {
    localStorage.removeItem("themePreferences");
  }

  const themeSelect = listThemes.find((x) => x.name === themeName);
  const colorSelect = colorThemes.find((x) => x.name === colorName);

  localStorage.setItem(
    "themePreferences",
    JSON.stringify({ themeName, colorName })
  );

  return createTheme({
    palette: {
      common: {
        white: themeSelect.theme.white,
      },
      primary: {
        main: colorSelect.color,
      },
      background: {
        default: themeSelect.theme.background,
        paper: themeSelect.theme.paper,
      },
    },
  });
}
