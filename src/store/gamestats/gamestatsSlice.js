import { createSlice } from "@reduxjs/toolkit";
import questionsData from "../../assets/questions";
const localStorageSaves = JSON.parse(localStorage.getItem("testsData"));

const gamestatsSlice = createSlice({
  name: "gamestats",
  initialState: {
    data: {
      default: {
        allData: questionsData,
        allPacksLength: [
          questionsData[0].stage[0].length +
            questionsData[0].stage[1].length +
            questionsData[0].stage[2].length,

          questionsData[1].stage[0].length +
            questionsData[1].stage[1].length +
            questionsData[1].stage[2].length,

          questionsData[2].stage[0].length +
            questionsData[2].stage[1].length +
            questionsData[2].stage[2].length,
        ],
      },

      questions: questionsData[0].stage[0],
      questionsPack: 0,
    },
    player: {
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
    currectAnswers: 0,
    currentQuestion: 0,
    currentStage: 0,
    mainMenuWayActive: 2,
  },
  reducers: {
    show: (state) => {},
    setQuestionsPack: (state, action) => {
      state.data.questionsPack = action.payload;
    },
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
    resetCurrentQuestion: (state) => {
      state.currentQuestion = 0;
    },
    updateCompleteTests: (state, action) => {
      state.player.completeTests[action.payload.pack].tests[
        action.payload.test
      ] = action.payload.value;
      localStorage.setItem(
        "testsData",
        JSON.stringify(state.player.completeTests)
      );
    },
    updatelvlScores: (state) => {
      state.player.lvl.scores =
        state.player.completeTests[0].tests.reduce((a, b) => a + b) +
        state.player.completeTests[1].tests.reduce((a, b) => a + b) +
        state.player.completeTests[2].tests.reduce((a, b) => a + b);
    },
    resetCompleteTests: (state) => {
      state.player.completeTests = JSON.parse(
        localStorage.getItem("testsData")
      );
    },
    setlvlName: (state, action) => {
      state.player.lvl.name = action.payload;
    },
  },
});

export const {
  show,
  setStageQuestions,
  incrementCurrentQuestion,
  incrementCurrectAnswers,
  resetCurrectAnswers,
  resetCurrentQuestion,
  setWayActive,
  setQuestionsPack,
  updateCompleteTests,
  resetCompleteTests,
  updatelvlScores,
  setlvlName,
} = gamestatsSlice.actions;
export default gamestatsSlice.reducer;
