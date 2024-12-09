import { normalizedUsers } from "../../assets/normalizedRestaurantsMock";
import { SliceBuilder } from "../sliceBuilder";

export const userSlice = new SliceBuilder("user", normalizedUsers)
  .withEntityById()
  .build();

export const { entityById: selectUserById } = userSlice.selectors;
