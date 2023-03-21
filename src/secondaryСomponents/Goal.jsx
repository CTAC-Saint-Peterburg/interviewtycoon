import castleImg from "../assets/castleimg.svg";
import styles from "./secondaryStyleComponents/Goal.module.css";
export const Goal = () => {
  return (
    <div className={styles.main}>
      <div className={styles.goalWrapper}>
        <img src={castleImg} alt="castle" />
        <h2>became a junior</h2>
      </div>
    </div>
  );
};
