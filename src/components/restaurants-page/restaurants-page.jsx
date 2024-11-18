import { Layout } from "../layout/layout";
import { Restaurant } from "../restaurant/restaurant";
import { TabControl } from "../tabs/tabControl";

export const RestaurantsPage = ({ restaurants }) => {
  return (
    <Layout>
      <TabControl
        items={restaurants}
        headerFunc={({ name }) => name}
        keyFunc={({ id }) => id}
        contentFunc={(item) => <Restaurant restaurant={item} />}
      />
    </Layout>
  );
};
