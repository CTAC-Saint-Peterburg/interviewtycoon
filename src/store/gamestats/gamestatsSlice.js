import { createSlice } from "@reduxjs/toolkit";
import loadedQuestions from "../../assets/questions";
const gamestatsSlice = createSlice({
  name: "gamestats",
  initialState: {
    data: { questions: loadedQuestions, stage: 0, currectAnswers: 0 },
    currentQuestion: 0,
    currentStage: 0,
  },
  reducers: {
    show: (state) => {},
    incrementCurrectAnswers: (state) => {
      state.data.currectAnswers += 1;
    },
    resetCurrectAnswers: (state) => {
      state.data.currectAnswers = 0;
    },
    incrementCurrentQuestion: (state, action) => {
      state.currentQuestion += action.payload;
    },
  },
});

export const {
  show,
  incrementCurrentQuestion,
  incrementCurrectAnswers,
  resetCurrectAnswers,
} = gamestatsSlice.actions;
export default gamestatsSlice.reducer;
