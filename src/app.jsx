import { restaurants } from "./assets/restaurantsMock.js";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page.jsx";

export const App = () => {
  return <RestaurantsPage restaurants={restaurants} />;
};
