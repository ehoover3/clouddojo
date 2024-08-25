import React from "react";

interface AnswerExplanationProps {
  explanation: { text: string; img: string };
  isCorrectAnswer: boolean | null;
}

const AnswerExplanation: React.FC<AnswerExplanationProps> = ({ explanation, isCorrectAnswer }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";

  return (
    <div className={isCorrectAnswer ? "bg-success" : "bg-fail"}>
      <p className='explanation'>{explanation.text}</p>
      {explanation.img && <img src={`${publicUrl}/images/${explanation.img}`} alt='Explanation Image' style={{ width: "10vw" }} />}
    </div>
  );
};

export default AnswerExplanation;
