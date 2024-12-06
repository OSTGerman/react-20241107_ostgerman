import { useState } from "react";
import {
  DEFAULT_THEME,
  THEME_DARK,
  THEME_LIGHT,
  ThemeContext,
} from "./themeContext";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const toggleTheme = () =>
    setTheme((currentTheme) =>
      currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT
    );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
