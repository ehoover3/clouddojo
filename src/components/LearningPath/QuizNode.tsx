import "../Menu.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import completed_img from "../../assets/Completed.png";

function QuizNode({ module }: any) {
  const { url, img, position, isComplete, text } = module;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxShadowStyle = {
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.3s",
  };

  const navigate = useNavigate();

  const startQuiz = () => {
    navigate(url);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        left: position,
        paddingBottom: "32px",
      }}>
      <img
        onClick={startQuiz}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={isComplete ? completed_img : img}
        alt='Question'
        style={{
          width: "120px",
          cursor: "pointer",
          ...boxShadowStyle,
        }}
      />

      <div
        onClick={startQuiz}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: "270px", textAlign: "center", cursor: "pointer", marginBottom: "50px" }}>
        {text}
      </div>
    </div>
  );
}

export default QuizNode;
