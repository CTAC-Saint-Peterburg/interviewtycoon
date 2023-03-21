import fingerImg from "../assets/fingerClick.svg";
import { useSelector } from "react-redux";
import styles from "./pagesStyleComponents/Main.module.css";
import { Way } from "../secondaryСomponents/Way";
import { Goal } from "../secondaryСomponents/Goal";
import { Startpoint } from "../secondaryСomponents/Startpoint";
export default function Main() {
  const test = useSelector((state) => state.gamestats.data.message);
  return (
    <div className={styles.main}>
      <Goal />
      <Way />
      <Startpoint />
      <div className={styles.startButton}>
        <div>
          <img className={styles.fingerimg} src={fingerImg} alt="fingerClick" />
        </div>
        <div>Start your journey</div>
      </div>
    </div>
  );
}
