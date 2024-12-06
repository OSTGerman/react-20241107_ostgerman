import { useAuth } from "../authContext/useAuth";

export const LoginButton = () => {
  const { isAuthorized, login, toggleAuth } = useAuth();

  return (
    <button onClick={toggleAuth}>
      {isAuthorized ? `${login} ↪` : "Sign in"}
    </button>
  );
};
