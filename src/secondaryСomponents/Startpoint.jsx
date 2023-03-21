import styles from "./secondaryStyleComponents/Startpoint.module.css";
import ratingImg from "../assets/stars.svg";
export const Startpoint = () => {
  return (
    <div className={styles.main}>
      <div className={styles.startPointWrapper}>
        <img src={ratingImg} alt="castle" />
        <h2>Raiting: 0/3 Junior</h2>
      </div>
    </div>
  );
};
