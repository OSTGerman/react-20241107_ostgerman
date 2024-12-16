import { normalizedDishes } from "../../assets/normalizedRestaurantsMock";
import { SliceBuilder } from "../sliceBuilder";

export const menuSlice = new SliceBuilder("menu", normalizedDishes)
  .withEntityById()
  .build();

export const { entityById: selectMenuItemById } = menuSlice.selectors;
