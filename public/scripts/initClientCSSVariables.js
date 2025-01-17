import { setSessionThemeVariables, setVariableCSS } from "./setVariablesCSS.js";

// Edit this variable to edit theme variables !
const CSS_THEME_VARIABLES = {
  light: {
    primary: "234 0 255",
    secondary: "4 217 255",

    background: "242 230 254",
    paper: "255 195 248",
    "text-primary": "0 0 0",
    "text-secondary": "38 38 38",
  },
  dark: {
    primary: "0 173 181",
    secondary: "238 238 238",

    background: "34 40 49",
    paper: "57 62 70",
    "text-primary": "255 255 255",
    "text-secondary": "238 238 238",
  },
};

setSessionThemeVariables(CSS_THEME_VARIABLES);

/**
 * Init HTML with current theme colors, or other variables 👀
 * You can edit this variable, in the "CSS_THEME_VARIABLES" object.
 */
const setInitDefaultThemeColor = () => {
  const getStoredColorScheme = localStorage.getItem("theme");
  const userColorScheme = window.matchMedia("(prefers-color-scheme: light)")
    .matches
    ? "light"
    : "dark";

  const theme = getStoredColorScheme ?? userColorScheme;

  setVariableCSS(theme);
};

document.addEventListener("DOMContentLoaded", setInitDefaultThemeColor);
