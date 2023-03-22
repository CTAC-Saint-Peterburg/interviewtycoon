import styles from "./secondaryStyleComponents/GameHeader.module.css";
export const GameHeader = ({ data }) => {
  return (
    <div className={styles.main}>
      <h2>1/{data.length}</h2>
      <progress value={0}></progress>
    </div>
  );
};
