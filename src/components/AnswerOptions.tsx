import React from "react";

interface AnswerOptionsProps {
  answerOptions: any[];
  selectedAnswer: string | null;
  handleAnswer: (answer: string) => void;
  isCheckButtonClicked: boolean;
  currentQuestion: any;
}

interface AnswerOptionProps {
  answerOption: any;
  selectedAnswer: string | null;
  handleAnswer: (answer: string) => void;
  isCheckButtonClicked: boolean;
  currentQuestion: any;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ answerOptions, selectedAnswer, handleAnswer, isCheckButtonClicked, currentQuestion }) => {
  return (
    <div className='answers'>
      {answerOptions.map((answerOption, index) => (
        <AnswerOption key={index} answerOption={answerOption} selectedAnswer={selectedAnswer} handleAnswer={handleAnswer} isCheckButtonClicked={isCheckButtonClicked} currentQuestion={currentQuestion} />
      ))}
    </div>
  );
};

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

export default AnswerOptions;
