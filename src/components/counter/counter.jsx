import { useState } from "react";

export const Counter = ({ min, max, cur = 0 }) => {
  const [value, setValue] = useState(cur);
  const increment = () => setValue(Math.min(max, value + 1));
  const decrement = () => setValue(Math.max(min, value - 1));

  return (
    <div>
      <button onClick={decrement}>-</button>
      &nbsp;{value}&nbsp;
      <button onClick={increment}>+</button>
    </div>
  );
};
