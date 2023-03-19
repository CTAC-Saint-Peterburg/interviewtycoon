import { configureStore } from "@reduxjs/toolkit";
import gamestatsSlice from "./gamestats/gamestatsSlice";
export const store = configureStore({
  reducer: {
    gamestats: gamestatsSlice,
  },
});
