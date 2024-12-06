import { restaurants } from "./assets/restaurantsMock.js";
import { AuthContextProvider } from "./components/authContext/authContextProvider.jsx";
import { Layout } from "./components/layout/layout.jsx";
import { RestaurantsPage } from "./components/restaurantsPage/restaurantsPage.jsx";
import { ThemeContextProvider } from "./components/themeContext/themeContextProvider.jsx";

export const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout>
          <RestaurantsPage restaurants={restaurants} />
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
