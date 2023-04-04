import { createSlice } from "@reduxjs/toolkit";
const playerSlice = createSlice({
  name: "player",
  initialState: {
    lvl: { name: "junior", stage: 0 },
    completeTests: JSON.parse(localStorage.getItem("testsData")),
    achievments: [
      { name: "complete first test", status: false },
      { name: "finish first three tests", status: false },
    ],
  },
  reducers: {},
});
export const {} = playerSlice.actions;
export default playerSlice.reducer;
