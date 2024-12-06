import { useAuth } from "../authContext/useAuth";
import { Counter } from "../counter/counter";
import { useCounter } from "../counter/useCounter";

export const MenuItem = ({ menuItem }) => {
  const { name } = menuItem;
  const { count, increment, decrement } = useCounter(0, 20);

  const { isAuthorized } = useAuth();

  return (
    <div>
      <span>{name}</span>
      {isAuthorized && (
        <Counter increment={increment} decrement={decrement} value={count} />
      )}
    </div>
  );
};
