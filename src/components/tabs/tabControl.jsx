import { TabItem } from "./tabItem";
import styles from "./tabControl.module.css";

export const TabControl = ({
  items,
  headerFunc,
  keyFunc,
  toFunc,
  isActiveFunc,
}) => {
  return (
    <nav className={styles.tabControl}>
      {items.map((item) => {
        return (
          <TabItem
            key={keyFunc(item)}
            className={styles.itemContainer}
            header={headerFunc(item)}
            to={toFunc(item)}
            activeSegment={isActiveFunc ? isActiveFunc(item) : toFunc(item)}
          />
        );
      })}
    </nav>
  );
};
