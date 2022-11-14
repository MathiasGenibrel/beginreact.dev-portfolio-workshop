import "../src/styles/globals.css";
import "../src/styles/theme.css";
import { ThemeProvider } from "../src/context/ThemeProvider";
import { useThemeContext } from "../src/hooks/useThemeContext";
import clsx from "clsx";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <AppWrapper Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
};

const AppWrapper = ({ Component, pageProps }) => {
  const { isDark } = useThemeContext();

  return (
    <>
      <div
        id="app"
        className={clsx(isDark && "dark")}>
        <div
          className="px-4 m-auto max-w-7xl h-full">
          <Component{...pageProps}
          />
        </div>
      </div>
    </>

  );
};

export default MyApp;
