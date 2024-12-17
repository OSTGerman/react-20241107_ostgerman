import classNames from "classnames";
import styles from "./tabItem.module.css";
import { NavLink } from "react-router-dom";

export const TabItem = ({ header, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.tabItem, {
          [styles.selected]: isActive,
        })
      }
      to={to}
      
    >
      {header}
    </NavLink>
  );
};
