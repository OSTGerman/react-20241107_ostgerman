import { useSelector } from "react-redux";
import { TabControl } from "../tabs/tabControl";
import { selectRestaurantOptions } from "../../data/slices/restaurantSlice";
import { RestaurantContainer } from "../restaurant/restaurantContainer";

export const RestaurantsPage = () => {
  const restaurantOptions = useSelector(selectRestaurantOptions);

  return (
    <TabControl
      items={restaurantOptions}
      headerFunc={({ name }) => name}
      keyFunc={({ id }) => id}
      contentFunc={({ id }) => <RestaurantContainer id={id} />}
    />
  );
};
