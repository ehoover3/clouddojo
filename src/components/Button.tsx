import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false, className = "btn-gray" }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className} style={{ cursor: disabled ? "not-allowed" : "pointer" }}>
      {text}
    </button>
  );
};

export default Button;
