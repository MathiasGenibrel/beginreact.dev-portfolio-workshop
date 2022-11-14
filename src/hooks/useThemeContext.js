import { useContext } from "react";
import { themeContext } from "../context/ThemeProvider";

export const useThemeContext = () => {
  const context = useContext(themeContext)
  if (!context) throw new Error("This context is used outside its scope. It must be in the Context.Provider")

  return {...context}
}