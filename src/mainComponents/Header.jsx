import settingsImg from "../assets/settings.svg";
import leftArrowImg from "../assets/leftarrowImg.svg";
import achievementImg from "../assets/achievement.svg";
import styles from "./mainStyleComponents/header.module.css";
import { Link, useLocation } from "react-router-dom";
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
      ) : (
        <Link to="/achievements">
          <div className={styles.achievement}>
            <img src={achievementImg} alt="achievments" />
          </div>
        </Link>
      )}
      {useLocation().pathname !== "/settings" ? (
        <Link to="/settings">
          <div className={styles.settingsImg}>
            <img src={settingsImg} alt="settingsImage" />
          </div>
        </Link>
      ) : null}
    </div>
  );
}
