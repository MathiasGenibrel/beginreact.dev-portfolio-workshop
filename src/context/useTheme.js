import { useEffect, useRef, useState } from "react";
import { useUserColorScheme } from "./useUserColorScheme";

// Key for localStorage
const THEME_LOCAL_KEY = "theme";

export const useTheme = () => {
  const [theme, setTheme] = useState("");
  const userColorScheme = useUserColorScheme();
  const toggleRef = useRef(null);

  // this effect is used to sync, our theme state with localStorage or Window prefer color scheme
  useEffect(() => {
    const userSelectedTheme = localStorage.getItem(THEME_LOCAL_KEY);

    // When the current ref is true, we update the localStorage for sync with our application
    if (toggleRef.current) return localStorage.setItem(THEME_LOCAL_KEY, theme);

    // As long as the localStorage with the key "THEME_LOCAL_KEY" is undefined and the current toggleRef is false
    // We set the theme to be the same as the userColorScheme.
    setTheme(userSelectedTheme ?? userColorScheme);
  }, [theme, userColorScheme]);

  const isDark = theme === "dark";
  const isLight = theme === "light";
  const toggleTheme = () => {
    /*
      When the user press the button with the toggleTheme function,
      we pass the toggleRef to true, to know when user chooses his favorite theme in our application
     */

    toggleRef.current = true;
    setTheme((current) => current === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme, isDark, isLight };
};