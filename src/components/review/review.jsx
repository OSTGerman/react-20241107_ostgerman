export const Review = ({ text, userName }) => {
  return (
    <>
      <span>{userName}</span>:{" "}
      <span>
        <em>{text}</em>
      </span>
    </>
  );
};
