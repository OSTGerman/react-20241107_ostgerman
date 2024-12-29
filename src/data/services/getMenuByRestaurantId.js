import { API_BASE } from "../consts";

export const getMenuByRestaurantId = async (restaurantId) => {
  const result = await fetch(`${API_BASE}/dishes?restaurantId=${restaurantId}`);

  return await result.json();
};
