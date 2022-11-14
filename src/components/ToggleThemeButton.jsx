import styles from "./ToggleThemeButton.module.css";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import clsx from "clsx";
import { useThemeContextDispatcher } from "../hooks/useThemeContextDispatcher";
import { useThemeContext } from "../hooks/useThemeContext";

export const ToggleThemeButton = () => {
  const {toggleTheme} = useThemeContextDispatcher()
  const {isDark, isLight} = useThemeContext()

  return (
    <div className="overflow-hidden relative p-2 rounded-full border-primary">
      <MdOutlineWbSunny
        onClick={toggleTheme}
        className={clsx("relative h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: isLight,
          [styles.exit]: isDark,
        })}
      />
      <MdOutlineModeNight
        onClick={toggleTheme}
        className={clsx("absolute top-2 h-6 w-6 cursor-pointer text-primary", {
          [styles.enter]: isDark,
          [styles.exit]: isLight,
        })}
      />
    </div>
  );
};
