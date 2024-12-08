import { createContext } from "react";

export const DEFAULT_AUTH_CONTEXT = {
  isAuthorized: false,
};

export const AuthContext = createContext(DEFAULT_AUTH_CONTEXT);
