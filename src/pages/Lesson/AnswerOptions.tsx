import React from "react";
import "./AnswerOptions.css";

interface AnswerProps {
  answer: string;
  disabled: boolean;
  onClick: (answer: string) => void;
  isAssigned: boolean;
  isSelected: boolean;
}

const AnswerOptions: React.FC<AnswerProps> = ({ answer, disabled, onClick, isAssigned, isSelected }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(answer);
    }
  };

  return (
    <div
      className='answer'
      style={{
        backgroundColor: isSelected ? "lightblue" : isAssigned ? "grey" : "white",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={handleClick}>
      {answer}
    </div>
  );
};

export default AnswerOptions;
