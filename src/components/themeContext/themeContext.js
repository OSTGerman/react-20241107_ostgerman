import { createContext } from "react";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const DEFAULT_THEME = THEME_LIGHT;

export const ThemeContext = createContext(DEFAULT_THEME);
