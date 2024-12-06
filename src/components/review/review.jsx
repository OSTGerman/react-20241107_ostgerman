import { useAuth } from "../authContext/useAuth";
import { ReviewForm } from "./reviewForm";

export const Reviews = ({ data: reviews }) => {
  const { isAuthorized } = useAuth();

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
      {isAuthorized && <ReviewForm />}
    </>
  );
};
