import React from "react";

interface CheckContinueButtonProps {
  isCheckButtonClicked: boolean;
  handleCheck: () => void;
  handleContinue: () => void;
  isAnswerSelected: boolean;
}

const CheckContinueButton: React.FC<CheckContinueButtonProps> = ({ isCheckButtonClicked, handleCheck, handleContinue, isAnswerSelected }) => {
  return (
    <button onClick={isCheckButtonClicked ? handleContinue : handleCheck} disabled={!isAnswerSelected}>
      {isCheckButtonClicked ? "Continue" : "Check"}
    </button>
  );
};

export default CheckContinueButton;
