import { normalizedRestaurants } from "../../assets/normalizedRestaurantsMock";
import { SliceBuilder } from "../sliceBuilder";

export const restaurantsSlice = new SliceBuilder(
  "restaurants",
  normalizedRestaurants
)
  .withSelectorOptions()
  .withEntityById()
  .build();

export const {
  entitiesOptions: selectRestaurantOptions,
  entityById: selectRestaurantById,
} = restaurantsSlice.selectors;
