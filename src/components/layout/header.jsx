import { useAuth } from "../authContext/useAuth";
import { Cart } from "../cart/cart";
import { LoginButton } from "../login/loginButton";
import { ThemeToggle } from "../themeToggle/themeToggle";
import styles from "./header.module.css";

export const Header = () => {
  const { isAuthorized } = useAuth();

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.header}>Reactive Restaurants</h1>
      {isAuthorized && <Cart />}
      <LoginButton />
      <ThemeToggle />
    </header>
  );
};
