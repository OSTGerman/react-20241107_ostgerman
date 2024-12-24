import { useContext } from "react";
import { AuthContext } from "./authContext";

export const useAuth = () => {
  const {
    auth: { isAuthorized, login, id },
    toggleAuth,
  } = useContext(AuthContext);

  return { isAuthorized, login, id, toggleAuth };
};
