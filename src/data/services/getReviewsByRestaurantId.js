import { API_BASE } from "../consts";

export const getReviewsByRestaurantId = async (restaurantId) => {
  const result = await fetch(
    `${API_BASE}/reviews?restaurantId=${restaurantId}`
  );

  return await result.json();
};
