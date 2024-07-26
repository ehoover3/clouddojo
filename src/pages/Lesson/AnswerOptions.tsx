import React from "react";
import "./AnswerOptions.css";

interface Option {
  option: string;
  explanation: string;
}

interface AnswerOptionsProps {
  options: Option[];
  selectedAnswer: string | null;
  assignedAnswer: string | null;
  onClick: (answer: string) => void;
  disabled: boolean;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ options, selectedAnswer, assignedAnswer, onClick, disabled }) => {
  return (
    <div className='answers'>
      {options.map((option, index) => (
        <div
          key={index}
          className='answer'
          style={{
            backgroundColor: selectedAnswer === option.option ? "lightblue" : assignedAnswer === option.option ? "grey" : "white",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          onClick={() => !disabled && onClick(option.option)}>
          {option.option}
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
