import classNames from "classnames";
import styles from "./counter.module.css";
import { useTheme } from "../themeContext/useTheme";
import { THEME_DARK, THEME_LIGHT } from "../themeContext/themeContext";

export const VARIANT_THUMB = "thumb";
export const VARIANT_DEFAULT = "default";

const getStyleModifiers = (variant, theme) => {
  return {
    [styles.default]: variant === VARIANT_DEFAULT,
    [styles.thumb]: variant === VARIANT_THUMB,
    [styles.light]: theme === THEME_LIGHT,
    [styles.dark]: theme === THEME_DARK,
  };
};

export const Counter = ({
  increment,
  decrement,
  value,
  variant = VARIANT_DEFAULT,
}) => {
  const { theme } = useTheme();

  const styleModifiers = getStyleModifiers(variant, theme);

  return (
    <div>
      <button
        className={classNames(styles.decrement, styleModifiers)}
        onClick={decrement}
      ></button>
      &nbsp;<strong>{value}</strong>&nbsp;
      <button
        className={classNames(styles.increment, styleModifiers)}
        onClick={increment}
      ></button>
    </div>
  );
};
