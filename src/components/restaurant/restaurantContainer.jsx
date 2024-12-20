import { useEffect, useState } from "react";
import { selectRestaurantById } from "../../data/slices/restaurantSlice";
import { Restaurant } from "./restaurant";
import { useSelector } from "react-redux";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, menu, reviews } = restaurant;

  const [image, setImage] = useState(null);

  useEffect(() => {
    async function loadImg() {
      const getFoodResult = await fetch("https://foodish-api.com/api");
      const json = await getFoodResult.json();
      setImage(json.image);
    }
    loadImg();
  }, [id]);

  return (
    restaurant && (
      <Restaurant name={name} menu={menu} reviews={reviews} image={image} />
    )
  );
};
