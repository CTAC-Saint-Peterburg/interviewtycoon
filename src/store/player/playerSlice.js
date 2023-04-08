import { createSlice } from "@reduxjs/toolkit";
const localStorageSaves = JSON.parse(localStorage.getItem("testsData"));
const playerSlice = createSlice({
  name: "player",
  initialState: {
    lvl: {
      name: "junior",
      scores:
        localStorageSaves[0].tests.reduce((a, b) => a + b) +
        localStorageSaves[1].tests.reduce((a, b) => a + b) +
        localStorageSaves[2].tests.reduce((a, b) => a + b),
    },
    completeTests: localStorageSaves,
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
    updatelvlScores: (state) => {
      state.lvl.scores =
        state.completeTests[0].tests.reduce((a, b) => a + b) +
        state.completeTests[1].tests.reduce((a, b) => a + b) +
        state.completeTests[2].tests.reduce((a, b) => a + b);
    },
    resetCompleteTests: (state) => {
      state.completeTests = JSON.parse(localStorage.getItem("testsData"));
    },
  },
});
export const { updateCompleteTests, resetCompleteTests, updatelvlScores } =
  playerSlice.actions;
export default playerSlice.reducer;
