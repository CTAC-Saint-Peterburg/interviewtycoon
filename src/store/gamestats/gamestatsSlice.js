import { createSlice } from "@reduxjs/toolkit";
import loadedQuestions from "../../assets/questions";
const gamestatsSlice = createSlice({
  name: "gamestats",
  initialState: { data: { questions: loadedQuestions } },
  reducers: {
    show: (state) => {},
  },
});

export const { show } = gamestatsSlice.actions;
export default gamestatsSlice.reducer;
