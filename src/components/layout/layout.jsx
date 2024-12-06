import classNames from "classnames";
import { ProgressBar } from "../progress/progressBar";
import { THEME_DARK } from "../themeContext/themeContext";
import { useTheme } from "../themeContext/useTheme";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={classNames({ ["themeDark"]: theme == THEME_DARK })}>
      <ProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
