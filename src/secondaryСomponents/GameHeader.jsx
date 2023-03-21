import styles from "./secondaryStyleComponents/GameHeader.module.css";
export const GameHeader = () => {
  return (
    <div className={styles.main}>
      <h2>1/20</h2>
      <progress value={0}></progress>
    </div>
  );
};
