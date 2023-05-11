import styles from "./secondaryStyleComponents/Startpoint.module.css";
import { useSelector } from "react-redux";
import ratingImg from "../assets/stars.svg";
export const Startpoint = () => {
  const rank = useSelector((state) => state.gamestats.player.lvl);
  const data = useSelector((state) => state.gamestats.data);
  return (
    <div className={styles.main}>
      <div className={styles.startPointWrapper}>
        <img src={ratingImg} alt="castle" />
        <h2>
          Raiting: {rank.scores}/{data.questions.length} {rank.name}
        </h2>
      </div>
    </div>
  );
};
