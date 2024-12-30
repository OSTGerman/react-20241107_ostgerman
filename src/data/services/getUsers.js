import { API_BASE } from "../consts";

export const getUsers = async () => {
  const result = await fetch(`${API_BASE}/users`, {
    cache: "force-cache",
  });

  return await result.json();
};
