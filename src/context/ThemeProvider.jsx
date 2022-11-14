// Dark mode exercise
import { createContext } from "react";
import { useTheme } from "./useTheme";

export const themeContext = createContext(null);
export const themeContextDispatcher = createContext(null);

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme, isDark, isLight } = useTheme();

  const values = { theme, isDark, isLight };
  const dispatcherValues = { toggleTheme };

  return (
    <themeContext.Provider value={values}>
      <themeContextDispatcher.Provider value={dispatcherValues}>
        {children}
      </themeContextDispatcher.Provider>
    </themeContext.Provider>
  );
};
