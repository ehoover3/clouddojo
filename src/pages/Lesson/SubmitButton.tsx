import React, { useRef, useEffect } from "react";

interface SubmitButtonProps {
  showNext: boolean;
  onClick: () => void;
  disabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ showNext, onClick, disabled }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && buttonRef.current && !disabled) {
        event.preventDefault();
        buttonRef.current.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [disabled]);

  return (
    <button ref={buttonRef} className='submit-button' onClick={onClick} disabled={disabled}>
      {showNext ? "Next" : "Submit"}
    </button>
  );
};

export default SubmitButton;
