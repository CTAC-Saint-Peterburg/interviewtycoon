import { useEffect, useState } from "react";
import styles from "./secondaryStyleComponents/Questions.module.css";
export const Questions = ({ data }) => {
  const [shaffle, setShaffle] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  useEffect(() => {
    setShaffle(data[currentQuestion].variants.sort(() => Math.random() - 0.5));
  }, [currentQuestion]);
  const [choice, setChoice] = useState({ styleIndex: null, myAnswer: null });
  const [showAnswer, setShowAnswer] = useState(false);
  console.log(data);

  function handleClick(choiceIncome, style) {
    if (choice.myAnswer === null) {
      setChoice({ myAnswer: choiceIncome, styleIndex: style });
      setShowAnswer(true);
    }
    setNextButton(true);
  }
  function next() {
    if (data.length > currentQuestion + 1) {
      setNextButton(false);
      setShowAnswer(false);
      setChoice({ myAnswer: null, styleIndex: null });
      setCurrentQuestion((old) => old + 1);
      console.log("good");
    } else console.log("no questions");
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
            } ${
              showAnswer && answer === data[currentQuestion].answer
                ? styles.showAnswer
                : ""
            }`}
            onClick={() => handleClick(answer, index)}
          >
            <p>{answer}</p>
          </div>
        ))}
      </div>
      {nextButton ? (
        <div className={styles.nextButtonWrapper}>
          <button className={styles.nextButton} onClick={next}>
            next
          </button>
        </div>
      ) : null}
    </div>
  );
};
