import { Review } from "./review";

export const Reviews = ({ data: reviews, users }) => {
  return (
    <>
      <h3>Reviews</h3>
      <ul>
        {!reviews?.length ? (
          <span>Be the first to review</span>
        ) : (
          reviews.map((review) => {
            const user = users?.find((user) => user.id === review.userId);
            return (
              <li key={review.id}>
                <Review review={review} user={user} />
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
