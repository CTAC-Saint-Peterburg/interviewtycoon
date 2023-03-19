import { createSlice } from "@reduxjs/toolkit";
const gamestatsSlice = createSlice({
  name: "gamestats",
  initialState: { data: { message: "hey!" } },
  reducers: {
    show: (state) => {
      state.data.message = "hm...";
    },
  },
});

export const { show } = gamestatsSlice.actions;
export default gamestatsSlice.reducer;
