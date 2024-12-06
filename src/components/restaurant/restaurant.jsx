import { useEffect, useState } from "react";
import { Menu } from "../menu/menu";
import { Reviews } from "../review/review";

import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function loadImg() {
      const getFoodResult = await fetch("https://foodish-api.com/api");
      const json = await getFoodResult.json();
      setImage(json.image);
    }
    loadImg();
  }, []);

  return (
    <article>
      <h2>{name}</h2>
      <div className={styles.restaurantImageContainer}>
        {image ? (
          <img className={styles.restaurantImage} src={image}></img>
        ) : (
          <div className={styles.restaurantImagePlaceholder}></div>
        )}
      </div>

      <Menu data={menu} />
      <Reviews data={reviews} />
    </article>
  );
};
