import { TabControl } from "../tabs/tabControl";
import { getRestaurants } from "../../data/services/getRestaurants";

export const RestaurantsContainer = async () => {
  const restaurants = await getRestaurants();

  return (
    <TabControl
      items={restaurants}
      headerFunc={({ name }) => name}
      keyFunc={({ id }) => id}
      toFunc={({ id }) => `/restaurants/${id}/menu`}
      isActiveFunc={({ id }) => `/restaurants/${id}`}
    />
  );
};
