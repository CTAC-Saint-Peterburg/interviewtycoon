import styles from "./secondaryStyleComponents/Startpoint.module.css";
import { useSelector } from "react-redux";
import ratingImg from "../assets/stars.svg";
export const Startpoint = () => {
  const rank = useSelector((state) => state.gamestats.player.lvl);
  const nextRankGoal = useSelector(
    (state) => state.gamestats.data.default.allPacksLength
  );
  console.log(nextRankGoal);
  return (
    <div className={styles.main}>
      <div className={styles.startPointWrapper}>
        <img src={ratingImg} alt="castle" />
        <h2>
          Raiting: {rank.scores}/
          {rank.scores < nextRankGoal[0]
            ? nextRankGoal[0]
            : rank.scores >= nextRankGoal[0] &&
              rank.scores < nextRankGoal[0] + nextRankGoal[1]
            ? nextRankGoal[0] + nextRankGoal[1]
            : nextRankGoal[0] + nextRankGoal[1] + nextRankGoal[2]}{" "}
          {rank.name}
        </h2>
      </div>
    </div>
  );
};
