import { useContext } from "react";
import { AuthContext } from "./authContext";

export const useAuth = () => {
  const {
    auth: { isAuthorized, login },
    toggleAuth,
  } = useContext(AuthContext);

  return { isAuthorized, login, toggleAuth };
};
