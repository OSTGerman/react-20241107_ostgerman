import { Provider } from "react-redux";
import { AuthContextProvider } from "./components/authContext/authContextProvider.jsx";
import { Layout } from "./components/layout/layout.jsx";
import { RestaurantsPage } from "./components/pages/restaurantsPage.jsx";
import { ThemeContextProvider } from "./components/themeContext/themeContextProvider.jsx";
import { store } from "./data/store.js";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./components/pages/homePage.jsx";
import { RestaurantPage } from "./components/pages/restaurantPage.jsx";
import { MenuPage } from "./components/pages/menuPage.jsx";
import { ReviewsPage } from "./components/pages/reviewsPage.jsx";
import { DishPage } from "./components/pages/dishPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [
              { index: true, element: <Navigate to="menu" replace /> },
              { path: "menu", element: <MenuPage /> },
              { path: "reviews", element: <ReviewsPage /> },
            ],
          },
        ],
      },
      {
        path: "dish/:dishId",
        element: <DishPage />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
