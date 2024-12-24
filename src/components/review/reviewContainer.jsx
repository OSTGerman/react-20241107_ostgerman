import { Review } from "./review";
import {
  useEditReviewMutation,
  useGetUsersQuery,
} from "../../data/services/api";
import { QueryStatusAware } from "../queryStatusAware/queryStatusAware";

export const ReviewContainer = ({ review }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result?.data?.find(({ id: userId }) => userId === review?.userId),
      };
    },
  });

  const [editReview, editQuery] = useEditReviewMutation();

  return (
    <QueryStatusAware query={editQuery}>
      <Review
        review={review}
        user={user}
        onEdit={(editedReview) =>
          editReview({ reviewId: review?.id, review: editedReview })
        }
      />
    </QueryStatusAware>
  );
};
