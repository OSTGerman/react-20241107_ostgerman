"use client";

import { THEME_DARK } from "../themeContext/themeContext";
import { useTheme } from "../themeContext/useTheme";
import styles from "./themeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === THEME_DARK ? "🌞" : "🌚"}
      </button>
    </div>
  );
};
