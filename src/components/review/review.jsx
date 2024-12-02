import { ReviewForm } from "./reviewForm";

export const Reviews = ({ data: reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {!reviews?.length ? (
          <span>Be the first to review</span>
        ) : (
          reviews.map(({ id, text }) => <li key={id}>{text}</li>)
        )}
      </ul>
      <ReviewForm />
    </>
  );
};
