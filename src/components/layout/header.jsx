"use client";

import Link from "next/link";
import { useAuth } from "../authContext/useAuth";
import { Cart } from "../cart/cart";
import { LoginButton } from "../login/loginButton";
import { ThemeToggle } from "../themeToggle/themeToggle";
import styles from "./header.module.css";

export const Header = () => {
  const { isAuthorized } = useAuth();

  return (
    <header className={styles.headerContainer}>
      <Link className={styles.header} href="/">
        <h1>Reactive Restaurants</h1>
      </Link>
      {isAuthorized && <Cart />}
      <LoginButton />
      <ThemeToggle />
    </header>
  );
};
