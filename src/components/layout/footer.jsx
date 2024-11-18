import { useState } from "react";

export const Footer = () => {
  const [curYear] = useState(() => new Date().getFullYear());

  return (
    <footer>
      <span>
        <small>&copy; Reactive Restaurants & co. {curYear}</small>
      </span>
    </footer>
  );
};
