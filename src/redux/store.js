import { configureStore } from "@reduxjs/toolkit";
import RecipesSlice from "./slices/RecipesSlice";

export const store = configureStore({
  reducer: {
    recipes: RecipesSlice,
  },
});
