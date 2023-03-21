import styles from "./secondaryStyleComponents/Way.module.css";
export const Way = () => {
  return (
    <div className={styles.main}>
      <div className={styles.blocks}>1</div>
      <div className={styles.blocks}>2</div>
      <div className={`${styles.blocks} ${styles.active}`}>3</div>
    </div>
  );
};
