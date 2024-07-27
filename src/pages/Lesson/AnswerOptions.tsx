import React from "react";
import "./AnswerOptions.css";

interface Option {
  answerImg: string;
  answerText: string;
  explanationText: string;
  explanationImg: string;
}

interface AnswerOptionsProps {
  answerOptions: Option[];
  selectedAnswer: string | null;
  assignedAnswer: string | null;
  onClick: (answer: string) => void;
  disabled: boolean;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ answerOptions, selectedAnswer, assignedAnswer, onClick, disabled }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";

  return (
    <div className='answers'>
      {answerOptions.map((answerOption, index) => (
        <div
          key={index}
          className='answer'
          style={{
            backgroundColor: selectedAnswer === answerOption.answerText ? "lightblue" : assignedAnswer === answerOption.answerText ? "grey" : "white",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          onClick={() => !disabled && onClick(answerOption.answerText)}>
          {answerOption.answerImg ? <img src={`${publicUrl}/images/${answerOption.answerImg}`} alt='Explanation Image' style={{ width: "100%" }} /> : ""}
          {answerOption.answerText}
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
