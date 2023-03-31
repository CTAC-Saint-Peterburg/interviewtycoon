import { createSlice } from "@reduxjs/toolkit";
import loadedQuestions from "../../assets/questions";
const gamestatsSlice = createSlice({
  name: "gamestats",
  initialState: { data: { questions: loadedQuestions }, currentQuestion: 0 },
  reducers: {
    show: (state) => {},
    incrementCurrentQuestion: (state, action) => {
      state.currentQuestion += action.payload;
    },
  },
});

export const { show, incrementCurrentQuestion } = gamestatsSlice.actions;
export default gamestatsSlice.reducer;
