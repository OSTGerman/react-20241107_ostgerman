export const Footer = () => {
  const curYear = new Date().getFullYear();

  return (
    <footer>
      <span>
        <small>&copy; Reactive Restaurants & co. {curYear}</small>
      </span>
    </footer>
  );
};
