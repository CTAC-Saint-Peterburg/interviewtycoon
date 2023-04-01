import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    lvl: { name: "junior", stage: 0 },
    achievments: [
      { name: "complete first test", status: false },
      { name: "finish first three tests", status: false },
    ],
    lastTestSaveProgress: {},
  },
  reducers: {},
});
export const {} = playerSlice.actions;
export default playerSlice.reducer;
