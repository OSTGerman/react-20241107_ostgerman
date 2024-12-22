export const Review = ({ review, user }) => {
  if (!review || !user) {
    return null;
  }

  const { text } = review;
  const { name: userName } = user;

  return (
    <>
      <span>{userName}</span>:{" "}
      <span>
        <em>{text}</em>
      </span>
    </>
  );
};
