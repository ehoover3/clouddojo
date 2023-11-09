import "../Menu/Menu.css";
import { useState } from "react";
import React from "react";
import { QuestionType } from "../../types/Question";
export interface QuizModuleType {
  img: string;
  position: string;
  isCompleted: boolean;
  quiz: string;
  text: string;
  startQuiz: any;
}

function QuizModule({ img, position, isCompleted, quiz, text, startQuiz }: QuizModuleType) {
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={img}
        alt='Question'
        style={{
          width: "120px",
          cursor: "pointer",
          ...boxShadowStyle,
          outline: isCompleted ? "5px solid gold" : "",
        }}
        onClick={() => startQuiz(quiz)}
      />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: "270px", textAlign: "center", cursor: "pointer", marginBottom: "50px" }}
        onClick={() => startQuiz(quiz)}>
        {text}
      </div>
    </div>
  );
}

export default QuizModule;
