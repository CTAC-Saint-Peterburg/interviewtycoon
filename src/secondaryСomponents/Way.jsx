import { useState } from "react";
import styles from "./secondaryStyleComponents/Way.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setStageQuestions,
  setWayActive,
} from "../store/gamestats/gamestatsSlice";
export const Way = () => {
  const dispath = useDispatch();
  const activeWay = useSelector((state) => state.gamestats.mainMenuWayActive);
  const [blocks, setBlocks] = useState([1, 2, 3]);

  function handleClick(index) {
    dispath(setStageQuestions({ lvl: 0, stage: 2 - index }));
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
          {block}
        </div>
      ))}
    </div>
  );
};
