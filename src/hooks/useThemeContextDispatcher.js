import { useContext } from "react";
import { themeContextDispatcher } from "../context/ThemeProvider";

export const useThemeContextDispatcher = () => {
  const context = useContext(themeContextDispatcher)
  if (!context) throw new Error("This context is used outside its scope. It must be in the Context.Provider")

  return {...context}
}