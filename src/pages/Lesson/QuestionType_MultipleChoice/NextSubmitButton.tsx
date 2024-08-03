import React from "react";

interface NextSubmitButtonProps {
  isAnswerSubmitted: boolean;
  handleNext: () => void;
  handleSubmit: () => void;
  isAnswerSelected: boolean;
}

const NextSubmitButton: React.FC<NextSubmitButtonProps> = ({ isAnswerSubmitted, handleNext, handleSubmit, isAnswerSelected }) => {
  return (
    <button onClick={isAnswerSubmitted ? handleNext : handleSubmit} disabled={!isAnswerSelected}>
      {isAnswerSubmitted ? "Next" : "Submit"}
    </button>
  );
};

export default NextSubmitButton;
