import { API_BASE } from "../consts";

export const getMenuItemById = async (menuItemId) => {
  const result = await fetch(`${API_BASE}/dish/${menuItemId}`, {
    cache: "force-cache",
  });

  return await result.json();
};
