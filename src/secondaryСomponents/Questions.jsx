import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCurrectAnswers,
  incrementCurrentQuestion,
  resetCurrectAnswers,
  setQuestionsPack,
  setStageQuestions,
} from "../store/gamestats/gamestatsSlice";
import { useNavigate } from "react-router-dom";
import styles from "./secondaryStyleComponents/Questions.module.css";
import {
  updateCompleteTests,
  updatelvlScores,
} from "../store/player/playerSlice";
import { resetCurrentQuestion } from "../store/gamestats/gamestatsSlice";

export const Questions = ({ data }) => {
  const go = useNavigate();
  const dispath = useDispatch();
  const [shaffle, setShaffle] = useState([]);
  const currentQuestion = useSelector(
    (state) => state.gamestats.currentQuestion
  );
  const correctAnswers = useSelector((state) => state.gamestats.currectAnswers);
  const currentWay = useSelector((state) => state.gamestats.mainMenuWayActive);
  const totalScores = useSelector((state) => state.player.lvl.scores);
  const questionsPack = useSelector(
    (state) => state.gamestats.data.questionsPack
  );
  const [nextButton, setNextButton] = useState(false);
  useEffect(() => {
    let copy = [...data[currentQuestion].variants];
    copy = copy.sort(() => 0.5 - Math.random());
    setShaffle(copy);
  }, [currentQuestion]);
  const [choice, setChoice] = useState({ styleIndex: null, myAnswer: null });
  const [showAnswer, setShowAnswer] = useState(false);

  function handleClick(choiceIncome, style) {
    if (choice.myAnswer === null) {
      setChoice({ myAnswer: choiceIncome, styleIndex: style });
      setShowAnswer(true);
    }
    if (choiceIncome === data[currentQuestion].answer && nextButton === false) {
      dispath(incrementCurrectAnswers());
    }
    setNextButton(true);
  }

  function next() {
    if (data.length > currentQuestion + 1) {
      setNextButton(false);
      setShowAnswer(false);
      setChoice({ myAnswer: null, styleIndex: null });

      dispath(incrementCurrentQuestion(1));
    } else {
      dispath(
        updateCompleteTests({
          pack: questionsPack,
          test: currentWay,
          value: correctAnswers,
        })
      );
      dispath(resetCurrectAnswers());
      dispath(updatelvlScores());
      if (totalScores + correctAnswers < 14) {
        console.log(totalScores + correctAnswers);
        dispath(resetCurrentQuestion());
        dispath(setQuestionsPack(0));
      } else if (
        totalScores + correctAnswers >= 14 &&
        totalScores + correctAnswers < 20
      ) {
        dispath(resetCurrentQuestion());
        dispath(setStageQuestions({ lvl: 1, stage: 2 - 0 }));
        dispath(setQuestionsPack(1));
      } else if (
        totalScores + correctAnswers >= 20 &&
        totalScores + correctAnswers < 24
      ) {
        dispath(resetCurrentQuestion());
        dispath(setStageQuestions({ lvl: 1, stage: 2 - 0 }));
        dispath(setQuestionsPack(2));
      } else if (totalScores + correctAnswers >= 24) {
        dispath(resetCurrentQuestion());
        alert("you are winner!!!");
      }
      go("/");
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.questions}>
        <h3>{data[currentQuestion].question}</h3>
      </div>
      <div className={styles.answers}>
        {shaffle.map((answer, index) => (
          <div
            key={index}
            className={`${styles.answer} ${
              choice.styleIndex === index ? styles.active : ""
            } ${
              showAnswer && answer === data[currentQuestion].answer
                ? styles.showAnswer
                : ""
            }`}
            onClick={() => handleClick(answer, index)}
          >
            <p>{answer}</p>
          </div>
        ))}
      </div>
      {nextButton ? (
        <div className={styles.nextButtonWrapper}>
          <button className={styles.nextButton} onClick={next}>
            next
          </button>
        </div>
      ) : null}
    </div>
  );
};
