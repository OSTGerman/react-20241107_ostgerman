import { restaurants } from "./assets/restaurantsMock.js";
import { Layout } from "./components/layout/layout.jsx";
import { RestaurantsPage } from "./components/restaurantsPage/restaurantsPage.jsx";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage restaurants={restaurants} />
    </Layout>
  );
};
