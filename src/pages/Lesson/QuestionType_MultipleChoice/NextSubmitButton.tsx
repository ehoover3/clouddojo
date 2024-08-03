import React from "react";

interface NextSubmitButtonProps {
  showNext: boolean;
  handleNext: () => void;
  handleSubmit: () => void;
  isAnswerSelected: boolean;
}

const NextSubmitButton: React.FC<NextSubmitButtonProps> = ({ showNext, handleNext, handleSubmit, isAnswerSelected }) => {
  return (
    <button onClick={showNext ? handleNext : handleSubmit} disabled={!isAnswerSelected}>
      {showNext ? "Next" : "Submit"}
    </button>
  );
};

export default NextSubmitButton;
