import classNames from "classnames";
import styles from "./tabItem.module.css";

export const TabItem = ({ header, onSelected, isSelected }) => {
  return (
    <button
      className={classNames(styles.tabItem, {
        [styles.selected]: isSelected,
      })}
      disabled={isSelected}
      onClick={onSelected}
    >
      {header}
    </button>
  );
};
