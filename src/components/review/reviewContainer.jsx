import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../../data/entities/review/reviewSlice";
import { selectUserById } from "../../data/entities/user/userSlice";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  const user = useSelector((state) => selectUserById(state, review?.userId));

  return <Review review={review} user={user} />;
};
