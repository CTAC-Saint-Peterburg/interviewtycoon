import settingsImg from "../assets/settings.svg";
import leftArrowImg from "../assets/leftarrowImg.svg";
import styles from "./mainStyleComponents/header.module.css";
export default function Header({ backStatus }) {
  return (
    <div className={styles.main}>
      {backStatus ? (
        <div className={styles.leftArrow}>
          <img src={leftArrowImg} alt="leftArrow" />
          <span>back</span>
        </div>
      ) : null}
      <div className={styles.settingsImg}>
        <img src={settingsImg} alt="settingsImage" />
      </div>
    </div>
  );
}
