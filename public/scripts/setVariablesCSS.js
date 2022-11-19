const LOCAL_THEME_VARIABLES_KEY = "themeVariables";

// Return CSS variables object, see above.
const getSessionThemeVariables = () =>
  sessionStorage.getItem(LOCAL_THEME_VARIABLES_KEY) &&
  JSON.parse(sessionStorage.getItem(LOCAL_THEME_VARIABLES_KEY));

// Set the CSS_THEME_VARIABLES in the sessionStorage for the app
export const setSessionThemeVariables = (theme) =>
  sessionStorage.setItem(LOCAL_THEME_VARIABLES_KEY, JSON.stringify(theme));

export const setVariableCSS = (theme) => {
  const themeCSSVariables = getSessionThemeVariables();

  for (const variableName in themeCSSVariables[theme]) {
    document.body.style.setProperty(
      `--color-${variableName}`,
      themeCSSVariables[theme][variableName]
    );
  }
};
