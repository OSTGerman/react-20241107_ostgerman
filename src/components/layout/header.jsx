import { LoginButton } from "../login/loginButton";
import { ThemeToggle } from "../themeToggle/themeToggle";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.header}>Reactive Restaurants</h1>
      <LoginButton></LoginButton>
      <ThemeToggle></ThemeToggle>
    </header>
  );
};
