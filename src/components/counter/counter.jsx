export const Counter = ({ increment, decrement, value }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      &nbsp;<strong>{value}</strong>&nbsp;
      <button onClick={increment}>+</button>
    </div>
  );
};
