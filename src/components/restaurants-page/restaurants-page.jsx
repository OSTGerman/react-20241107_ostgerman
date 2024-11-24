import { Restaurant } from "../restaurant/restaurant";
import { TabControl } from "../tabs/tabControl";

export const RestaurantsPage = ({ restaurants }) => {
  return (
    <TabControl
      items={restaurants}
      headerFunc={({ name }) => name}
      keyFunc={({ id }) => id}
      contentFunc={(item) => <Restaurant restaurant={item} />}
    />
  );
};
