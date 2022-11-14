import { useEffect, useState } from "react";
import { useUserColorScheme } from "./useUserColorScheme";

// Key for localStorage
const THEME_LOCAL_KEY = "theme";

export const useTheme = () => {
  // Use "preferred" to default value, to know if user set a value for color scheme.
  const [theme, setTheme] = useState("preferred");
  const userColorScheme = useUserColorScheme();
  const isPreferredTheme = theme === "preferred"

  // this effect is used to sync, our theme state with localStorage or Window prefer color scheme
  useEffect(() => {
    const userSelectedTheme = localStorage.getItem(THEME_LOCAL_KEY);

    // If theme is defined and is not equal to preferred, update localStorage
    if (theme && !isPreferredTheme) return localStorage.setItem(THEME_LOCAL_KEY, theme);
    if (userSelectedTheme) setTheme(userSelectedTheme)
  }, [theme, userColorScheme, isPreferredTheme]);

  const isDark = isPreferredTheme ? userColorScheme === "dark" : theme === "dark";
  const isLight = isPreferredTheme ? userColorScheme === "light" : theme === "light";
  const toggleTheme = () => setTheme((current) => current === "light" ? "dark" : "light");

  // Set theme to user color scheme or selected theme.
  const currentTheme = isPreferredTheme ? userColorScheme : theme

  return { theme: currentTheme, toggleTheme, isDark, isLight };
};