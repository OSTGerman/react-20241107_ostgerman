import { Provider } from "react-redux";
import { AuthContextProvider } from "./components/authContext/authContextProvider.jsx";
import { Layout } from "./components/layout/layout.jsx";
import { RestaurantsPage } from "./components/restaurantsPage/restaurantsPage.jsx";
import { ThemeContextProvider } from "./components/themeContext/themeContextProvider.jsx";
import { store } from "./data/store.js";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
