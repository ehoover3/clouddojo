import React from "react";

interface ExplanationProps {
  explanation: { text: string; img: string };
  isCorrectAnswer: boolean | null;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation, isCorrectAnswer }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";

  return (
    <div style={{ backgroundColor: isCorrectAnswer ? "lightgreen" : "lightcoral" }}>
      <p className='explanation'>{explanation.text}</p>
      {explanation.img && <img src={`${publicUrl}/images/${explanation.img}`} alt='Explanation Image' style={{ width: "10vw" }} />}
    </div>
  );
};

export default Explanation;
