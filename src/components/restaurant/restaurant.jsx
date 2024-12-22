import { TabControl } from "../tabs/tabControl";

import styles from "./restaurant.module.css";

const tabData = [
  { id: "menu", name: "Menu" },
  { id: "reviews", name: "Reviews" },
];

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, img: image } = restaurant;

  return (
    <>
      <h2>{name}</h2>
      <div className={styles.imageContainer}>
        {image ? (
          <img className={styles.image} src={image}></img>
        ) : (
          <div className={styles.imagePlaceholder}></div>
        )}
      </div>
      <hr />
      <TabControl
        items={tabData}
        headerFunc={({ name }) => name}
        keyFunc={({ id }) => id}
        toFunc={({ id }) => id}
      />
    </>
  );
};
