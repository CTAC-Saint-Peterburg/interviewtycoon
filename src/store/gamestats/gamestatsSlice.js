import { createSlice } from "@reduxjs/toolkit";
import questionsData from "../../assets/questions";
const gamestatsSlice = createSlice({
  name: "gamestats",
  initialState: {
    data: {
      questions: questionsData[0].stage[0],
      stage: 0,
    },
    currectAnswers: 0,
    currentQuestion: 0,
    currentStage: 0,
    mainMenuWayActive: 2,
  },
  reducers: {
    show: (state) => {},
    setStageQuestions: (state, action) => {
      state.data.questions =
        questionsData[action.payload.lvl].stage[action.payload.stage];
    },
    setWayActive: (state, action) => {
      state.mainMenuWayActive = action.payload;
    },
    incrementCurrectAnswers: (state) => {
      state.currectAnswers += 1;
    },
    resetCurrectAnswers: (state) => {
      state.currectAnswers = 0;
    },
    incrementCurrentQuestion: (state, action) => {
      state.currentQuestion += action.payload;
    },
  },
});

export const {
  show,
  setStageQuestions,
  incrementCurrentQuestion,
  incrementCurrectAnswers,
  resetCurrectAnswers,
  setWayActive,
} = gamestatsSlice.actions;
export default gamestatsSlice.reducer;
