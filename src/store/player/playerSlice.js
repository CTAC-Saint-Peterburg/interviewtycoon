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
  reducers: {
    updateCompleteTests: (state, action) => {
      state.completeTests[0].tests[action.payload.test] = action.payload.value;
      localStorage.setItem("testsData", JSON.stringify(state.completeTests));
    },
    resetCompleteTests: (state) => {
      state.completeTests = JSON.parse(localStorage.getItem("testsData"));
    },
  },
});
export const { updateCompleteTests, resetCompleteTests } = playerSlice.actions;
export default playerSlice.reducer;
