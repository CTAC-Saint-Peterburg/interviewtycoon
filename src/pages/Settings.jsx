import { useDispatch } from "react-redux";
import styles from "./pagesStyleComponents/Settings.module.css";
import {
  resetCurrentQuestion,
  resetCompleteTests,
  updatelvlScores,
} from "../store/gamestats/gamestatsSlice";

export default function Settings() {
  const dispath = useDispatch();
  function resetProgress() {
    localStorage.clear();
    if (localStorage.getItem("testsData") === null) {
      localStorage.setItem(
        "testsData",
        '[{"name":"junior","tests":[0,0,0]},{"name":"middle","tests":[0,0,0]},{"name":"senior","tests":[0,0,0]}]'
      );
    }
    dispath(resetCompleteTests());
    dispath(resetCurrentQuestion());
    dispath(updatelvlScores());
  }
  return (
    <div className={styles.main}>
      <h2>Settings</h2>
      <div className={styles.optionsWrapper}>
        <button onClick={() => resetProgress()}>reset progress</button>
      </div>
    </div>
  );
}
