import { useState } from "react";

export const useCounter = (min, max, cur = min) => {
  const [count, setCount] = useState(cur);

  const increment = () => setCount(Math.min(count + 1, max));
  const decrement = () => setCount(Math.max(count - 1, min));

  return { count, increment, decrement };
};
