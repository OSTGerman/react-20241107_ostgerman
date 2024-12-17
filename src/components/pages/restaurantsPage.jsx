import { useSelector } from "react-redux";
import { TabControl } from "../tabs/tabControl";
import { selectRestaurantOptions } from "../../data/slices/restaurantSlice";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = () => {
  const restaurantOptions = useSelector(selectRestaurantOptions);

  return (
    <>
      <TabControl
        items={restaurantOptions}
        headerFunc={({ name }) => name}
        keyFunc={({ id }) => id}
        toFunc={({ id }) => id}
      />
      <Outlet />
    </>
  );
};
