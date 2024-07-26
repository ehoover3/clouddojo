import React from "react";
import "./AnswerOptions.css";

interface Option {
  answerOption: string;
  explanation: string;
}

interface AnswerOptionsProps {
  answerOptions: Option[];
  selectedAnswer: string | null;
  assignedAnswer: string | null;
  onClick: (answer: string) => void;
  disabled: boolean;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ answerOptions, selectedAnswer, assignedAnswer, onClick, disabled }) => {
  return (
    <div className='answers'>
      {answerOptions.map((answerOption, index) => (
        <div
          key={index}
          className='answer'
          style={{
            backgroundColor: selectedAnswer === answerOption.answerOption ? "lightblue" : assignedAnswer === answerOption.answerOption ? "grey" : "white",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          onClick={() => !disabled && onClick(answerOption.answerOption)}>
          {answerOption.answerOption}
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
