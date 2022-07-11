import { createTheme } from "@mui/material/styles";

const darkTheme = {
  background: "#232931",
  paper: "#393E46",
  white: "#EEEEE",
  text: "#fff",
};

const lightTheme = {
  background: "#E7E7E7",
  paper: "#EBEBEB",
  white: "#EEEEE",
  text: "#000",
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
  {
    name: "grey",
    color: "#939393",
  },
];

export function generatetheme({ themeName, colorName } = {}) {
  if (localStorage.getItem("themePreferences")) {
    localStorage.removeItem("themePreferences");
  }

  localStorage.setItem(
    "themePreferences",
    JSON.stringify({ themeName, colorName })
  );

  if (themeName === "system") {
    themeName = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const themeSelect = listThemes.find((x) => x.name === themeName);
  const colorSelect = colorThemes.find((x) => x.name === colorName);

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
      text: {
        primary: themeSelect.theme.text,
      },
    },
  });
}
