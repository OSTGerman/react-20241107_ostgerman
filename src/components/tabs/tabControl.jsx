import { useState } from "react";
import { TabItem } from "./tabItem";
import styles from "./tabControl.module.css";

export const TabControl = ({ items, headerFunc, keyFunc, contentFunc }) => {
  const [curItem, setCurItem] = useState(items[0]);

  return (
    <>
      <nav>
        <ul className={styles.tabControl}>
          {items.map((item) => {
            return (
              <li
                className={styles.tabControlItemContainer}
                key={keyFunc(item)}
              >
                <TabItem
                  header={headerFunc(item)}
                  isSelected={item === curItem}
                  onSelected={() => setCurItem(item)}
                ></TabItem>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>{contentFunc(curItem)}</div>
    </>
  );
};
