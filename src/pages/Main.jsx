import { useSelector } from "react-redux";
import styles from "./pagesStyleComponents/Main.module.css";
export default function Main() {
  const test = useSelector((state) => state.gamestats.data.message);
  return (
    <div className={styles.main}>
      <div className={styles.goal}>1</div>
      <div className={styles.way}>2</div>
      <div className={styles.startPoint}>3</div>
      <div>4</div>
    </div>
  );
}
