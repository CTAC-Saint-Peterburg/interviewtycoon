import castleImg from "../assets/castleimg.svg";
import { useSelector } from "react-redux";
import styles from "./secondaryStyleComponents/Goal.module.css";
export const Goal = () => {
  const rank = useSelector((state) => state.player.lvl.name);
  return (
    <div className={styles.main}>
      <div className={styles.goalWrapper}>
        <img src={castleImg} alt="castle" />
        <h2>became a {rank}</h2>
      </div>
    </div>
  );
};
