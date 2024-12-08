import { normalizedReviews } from "../../assets/normalizedRestaurantsMock";
import { SliceBuilder } from "../sliceBuilder";

export const reviewSlice = new SliceBuilder("review", normalizedReviews)
  .withEntityById()
  .build();

export const { entityById: selectReviewById } = reviewSlice.selectors;
