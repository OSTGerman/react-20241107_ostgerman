import { useState } from "react";
import {
  AuthContext,
  DEFAULT_AUTH_CONTEXT as DEFAULT_AUTH_STATE,
} from "./authContext";
import { getRandomInt } from "../../utils/random";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(DEFAULT_AUTH_STATE);

  const toggleAuth = () =>
    setAuth((currentAuthState) =>
      currentAuthState.isAuthorized
        ? DEFAULT_AUTH_STATE
        : {
            ...DEFAULT_AUTH_STATE,
            isAuthorized: true,
            login: `RandomKitten${getRandomInt(1000, 10000)}`,
          }
    );

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
