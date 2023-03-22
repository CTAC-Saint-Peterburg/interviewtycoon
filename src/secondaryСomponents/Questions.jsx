import { useEffect, useState } from "react";
import styles from "./secondaryStyleComponents/Questions.module.css";
export const Questions = ({ data }) => {
  const [shaffle, setShaffle] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    setShaffle(data[currentQuestion].variants.sort(() => Math.random() - 0.5));
  }, []);
  const [choice, setChoice] = useState({ styleIndex: null, myAnswer: null });
  console.log(data);

  function handleClick(choiceIncome, style) {
    if (choice.myAnswer === null) {
      setChoice({ myAnswer: choiceIncome, styleIndex: style });
    }
  }
  return (
    <div className={styles.main}>
      <div className={styles.questions}>
        <h3>{data[currentQuestion].question}</h3>
      </div>
      <div className={styles.answers}>
        {shaffle.map((answer, index) => (
          <div
            key={index}
            className={`${styles.answer} ${
              choice.styleIndex === index ? styles.active : ""
            }`}
            onClick={() => handleClick(answer, index)}
          >
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
