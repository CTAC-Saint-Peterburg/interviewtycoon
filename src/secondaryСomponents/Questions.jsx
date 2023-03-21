import styles from "./secondaryStyleComponents/Questions.module.css";
export const Questions = () => {
  return (
    <div className={styles.main}>
      <div className={styles.questions}>
        <h3>
          Questions ??? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quasi facilis nihil blanditiis, aliquam, reiciendis sunt vitae
          praesentium ratione impedit commodi repellat beatae cum voluptate.
          Excepturi deleniti non cumque ab doloribus.
        </h3>
      </div>
      <div className={styles.answers}>
        <div className={styles.answer}>1</div>
        <div className={styles.answer}>2</div>
        <div className={styles.answer}>3</div>
        <div className={styles.answer}>4</div>
      </div>
    </div>
  );
};
