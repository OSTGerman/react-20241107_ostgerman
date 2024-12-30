import { getRestaurants } from "../../data/services/getRestaurants";
import { Restaurant } from "./restaurant";

export const RestaurantContainer = async ({ id }) => {
  const restaurants = await getRestaurants();

  const restaurant = restaurants.find((restaurant) => restaurant.id === id);

  return <Restaurant restaurant={restaurant} />;
};
