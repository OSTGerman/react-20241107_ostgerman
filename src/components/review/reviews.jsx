import { ReviewContainer } from "./reviewContainer";

export const Reviews = ({ data: reviews }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {!reviews?.length ? (
          <span>Be the first to review</span>
        ) : (
          reviews.map((review) => (
            <li key={review.id}>
              <ReviewContainer review={review} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};
