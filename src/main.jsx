import "./index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./assets/restaurantsMock.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {restaurants.map((restaurant) => (
      <article key={restaurant.id}>
        <h2>{restaurant.name}</h2>
        <h3>Menu</h3>
        <ul>
          {restaurant.menu.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul>
          {restaurant.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </article>
    ))}
  </StrictMode>
);
