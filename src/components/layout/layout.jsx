import classNames from "classnames";
import { ProgressBar } from "../progress/progressBar";
import { THEME_DARK } from "../themeContext/themeContext";
import { useTheme } from "../themeContext/useTheme";
import { Footer } from "./footer";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames({ ["themeDark"]: theme == THEME_DARK })}>
      <ProgressBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
