import React from "react";

interface AnswerOptionProps {
  answerOption: any;
  selectedAnswer: string | null;
  handleAnswer: (answer: string) => void;
  isCheckButtonClicked: boolean;
  currentQuestion: any;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ answerOption, selectedAnswer, handleAnswer, isCheckButtonClicked, currentQuestion }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";

  return (
    <div
      className='answer'
      style={{
        backgroundColor: selectedAnswer === answerOption.answerText ? "lightblue" : currentQuestion.assignedAnswer === answerOption.answerText ? "grey" : "white",
        cursor: isCheckButtonClicked ? "not-allowed" : "pointer",
      }}
      onClick={() => !isCheckButtonClicked && handleAnswer(answerOption.answerText)}>
      {answerOption.answerImg ? <img src={`${publicUrl}/images/${answerOption.answerImg}`} alt='Explanation Image' style={{ width: "100%" }} /> : ""}
      {answerOption.answerText}
    </div>
  );
};

export default AnswerOption;
