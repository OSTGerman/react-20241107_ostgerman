import { Menu } from "../menu/menu";
import { Reviews } from "../review/reviews";

import styles from "./restaurant.module.css";

export const Restaurant = ({ name, menu, reviews, image }) => {
  return (
    <article>
      <h2>{name}</h2>
      <div className={styles.imageContainer}>
        {image ? (
          <img className={styles.image} src={image}></img>
        ) : (
          <div className={styles.imagePlaceholder}></div>
        )}
      </div>

      <Menu data={menu} />
      <Reviews data={reviews} />
    </article>
  );
};
