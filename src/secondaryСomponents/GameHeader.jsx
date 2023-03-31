import styles from "./secondaryStyleComponents/GameHeader.module.css";
import { useSelector } from "react-redux";
export const GameHeader = ({ data }) => {
  const currentQuestion = useSelector(
    (state) => state.gamestats.currentQuestion
  );
  return (
    <div className={styles.main}>
      <h2>
        {currentQuestion + 1}/{data.length}
      </h2>
      <progress value={0}></progress>
    </div>
  );
};
