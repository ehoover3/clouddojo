import React from "react";

interface CheckContinueButtonProps {
  isCheckButtonClicked: boolean;
  handleContinue: () => void;
  handleSubmit: () => void;
  isAnswerSelected: boolean;
}

const CheckContinueButton: React.FC<CheckContinueButtonProps> = ({ isCheckButtonClicked, handleContinue, handleSubmit, isAnswerSelected }) => {
  return (
    <button onClick={isCheckButtonClicked ? handleContinue : handleSubmit} disabled={!isAnswerSelected}>
      {isCheckButtonClicked ? "Continue" : "Check"}
    </button>
  );
};

export default CheckContinueButton;
