import { API_BASE } from "../consts";

export const GET_RESTAURANTS_TAG = "GET_RESTAURANTS";

export const getRestaurants = async () => {
  const result = await fetch(`${API_BASE}/restaurants`, {
    cache: "force-cache",
    next: { tags: [GET_RESTAURANTS_TAG] },
  });

  return await result.json();
};
