import React from "react";

interface SubmitButtonProps {
  showNext: boolean;
  onClick: () => void;
  disabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ showNext, onClick, disabled }) => {
  return (
    <button className='submit-button' onClick={onClick} disabled={disabled}>
      {showNext ? "Next" : "Submit"}
    </button>
  );
};

export default SubmitButton;
