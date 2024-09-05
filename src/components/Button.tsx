import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  width?: string;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  bottom?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false, className = "", width, position = "static", bottom = "auto" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        width: width,
        cursor: disabled ? "not-allowed" : "pointer",
        position: position,
        bottom: bottom,
      }}>
      {text}
    </button>
  );
};

export default Button;
