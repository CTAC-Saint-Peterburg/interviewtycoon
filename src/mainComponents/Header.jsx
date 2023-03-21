import settingsImg from "../assets/settings.svg";
import leftArrowImg from "../assets/leftarrowImg.svg";
import styles from "./mainStyleComponents/header.module.css";
import { Link } from "react-router-dom";
export default function Header({ backStatus }) {
  return (
    <div className={styles.main}>
      {backStatus ? (
        <Link to="/">
          <div className={styles.leftArrow}>
            <img src={leftArrowImg} alt="leftArrow" />
            <span>back</span>
          </div>
        </Link>
      ) : null}
      <div className={styles.settingsImg}>
        <img src={settingsImg} alt="settingsImage" />
      </div>
    </div>
  );
}
