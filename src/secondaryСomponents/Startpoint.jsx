import styles from "./secondaryStyleComponents/Startpoint.module.css";
import { useSelector } from "react-redux";
import ratingImg from "../assets/stars.svg";
export const Startpoint = () => {
  const rank = useSelector((state) => state.player.lvl);
  return (
    <div className={styles.main}>
      <div className={styles.startPointWrapper}>
        <img src={ratingImg} alt="castle" />
        <h2>
          Raiting: {rank.scores}/14 {rank.name}
        </h2>
      </div>
    </div>
  );
};
