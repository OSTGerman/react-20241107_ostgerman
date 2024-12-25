import { useState } from "react";
import {
  AuthContext,
  DEFAULT_AUTH_CONTEXT as DEFAULT_AUTH_STATE,
} from "./authContext";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(DEFAULT_AUTH_STATE);

  const toggleAuth = () =>
    setAuth((currentAuthState) =>
      currentAuthState.isAuthorized
        ? DEFAULT_AUTH_STATE
        : {
            ...DEFAULT_AUTH_STATE,
            isAuthorized: true,
            login: "Lolly",
            id: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
          }
    );

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
