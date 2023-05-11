import { Link } from "react-router-dom";
import fingerImg from "../assets/fingerClick.svg";
import styles from "./pagesStyleComponents/Main.module.css";
import { Way } from "../secondaryСomponents/Way";
import { Goal } from "../secondaryСomponents/Goal";
import { Startpoint } from "../secondaryСomponents/Startpoint";
export default function Main() {
  return (
    <div className={styles.main}>
      <Goal />
      <Way />
      <Startpoint />
      <Link to="/game">
        <div className={styles.startButton}>
          <div>
            <img
              className={styles.fingerimg}
              src={fingerImg}
              alt="fingerClick"
            />
          </div>
          <div>Start your journey</div>
        </div>
      </Link>
    </div>
  );
}
