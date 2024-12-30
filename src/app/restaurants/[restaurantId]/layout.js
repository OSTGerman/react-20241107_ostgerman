import { getRestaurants } from "../../../data/services/getRestaurants";
import { RestaurantLayout } from "../../../layoutComponents/restaurantLayout";

export const generateMetadata = async ({ params }) => {
  const restaurantId = (await params).restaurantId;

  const restaurants = await getRestaurants();

  const restaurant = restaurants?.find(({ id }) => id === restaurantId);

  return {
    title: restaurant?.name,
  };
};

export default RestaurantLayout;
