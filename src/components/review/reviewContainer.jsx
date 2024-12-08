import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../../data/slices/reviewSlice";
import { selectUserById } from "../../data/slices/userSlice";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const { text, userId } = review;

  const { name } = useSelector((state) => selectUserById(state, userId));
  
  return <Review text={text} userName={name} />;
};
