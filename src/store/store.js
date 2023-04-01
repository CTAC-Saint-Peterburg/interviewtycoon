import { configureStore } from "@reduxjs/toolkit";
import gamestatsSlice from "./gamestats/gamestatsSlice";
import playerSlice from "./player/playerSlice";
export const store = configureStore({
  reducer: {
    gamestats: gamestatsSlice,
    player: playerSlice,
  },
});
