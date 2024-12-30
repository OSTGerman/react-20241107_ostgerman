import { API_BASE } from "../consts";

export const editReview = async (restaurantId, review, add) => {
  const result = await fetch(
    `${API_BASE}/review/${add ? restaurantId : review.id}`,
    {
      method: add ? "POST" : "PATCH",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await result.json();
};
