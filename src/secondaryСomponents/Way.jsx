import { useState } from "react";
import styles from "./secondaryStyleComponents/Way.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  resetCurrentQuestion,
  resetCurrectAnswers,
  setStageQuestions,
  setWayActive,
} from "../store/gamestats/gamestatsSlice";
export const Way = () => {
  const dispath = useDispatch();
  const activeWay = useSelector((state) => state.gamestats.mainMenuWayActive);
  const questionsPack = useSelector(
    (state) => state.gamestats.data.questionsPack
  );
  const [blocks, setBlocks] = useState(["#3", "#2", "#1"]);
  const loadSaves = useSelector(
    (state) => state.gamestats.player.completeTests[questionsPack].tests
  );

  function handleClick(index) {
    dispath(resetCurrentQuestion());
    dispath(setStageQuestions({ lvl: questionsPack, stage: 2 - index }));
    dispath(resetCurrectAnswers());
    dispath(setWayActive(index));
  }
  return (
    <div className={styles.main}>
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`${styles.blocks} ${
            activeWay === index ? styles.active : null
          }`}
          onClick={() => handleClick(index)}
        >
          <span>{block}</span>
          <p>{loadSaves[index]}</p>
        </div>
      ))}
    </div>
  );
};
