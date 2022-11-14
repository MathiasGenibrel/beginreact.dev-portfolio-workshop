import { useEffect, useState } from "react";

/**
 * This hooks Get user prefers colors scheme and add an event listener at the mediaQueryList,
 * to get all change event from prefers-color-scheme.
 * @returns {string} "dark" of "light"
 */
export const useUserColorScheme = () => {
  const [colorScheme, setColorScheme] = useState("");

  // This useEffect is used to sync, prefers-color-scheme and colorScheme state
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: light)");

    // Compare if the prefers-color-scheme match with "light"
    const handleChange = () => {
      const userColorScheme = mediaQueryList.matches ? "light" : "dark";

      setColorScheme(userColorScheme);
    };

    // Add listener to fire event each it changes
    mediaQueryList.addEventListener("change", handleChange);

    // Used to set colorScheme, when the hooks were Mount
    handleChange()

    return () => mediaQueryList.removeEventListener("change", handleChange)
  }, []);

  return colorScheme;
};