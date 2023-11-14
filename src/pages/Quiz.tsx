import { useEffect } from "react";
import "./Quiz.css";

function Quiz({ questionIndex, selectedAnswer, setSelectedAnswer, questions, isFeedbackShowing, handleSelectedAnswer }: any) {
  const handleButtonClick = (optionIndex: number) => {
    if (!isFeedbackShowing) handleSelectedAnswer(questions[questionIndex].options[optionIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4" && !isFeedbackShowing) {
        const optionIndex = parseInt(event.key) - 1;
        setSelectedAnswer(optionIndex);
        handleButtonClick(optionIndex);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isFeedbackShowing, setSelectedAnswer]);

  return (
    <div className='question-view-container'>
      <h2 className='question-number'>Question {questionIndex + 1}</h2>
      <p className='question-text'>{questions[questionIndex].questionText}</p>

      {questions[questionIndex].options.map((option: any, index: any) => (
        <button
          key={index}
          onClick={() => {
            handleButtonClick(index);
            setSelectedAnswer(index);
          }}
          className={`option-button ${isFeedbackShowing ? "disabled" : ""} ${selectedAnswer === index ? "active" : ""}`}>
          <span style={{ fontWeight: "bold" }}>{index + 1}</span> &nbsp; {option.answer}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
