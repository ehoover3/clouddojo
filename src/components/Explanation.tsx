import React from "react";
import TextDisplay from "./TextDisplay";
import ImageDisplay from "./ImageDisplay";

interface ExplanationProps {
  explanation: { text: string; img: string };
  isCorrectAnswer: boolean | null;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation, isCorrectAnswer }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";

  return (
    <div>
      <TextDisplay text={explanation.text} />
      {explanation.img && <ImageDisplay img={`${publicUrl}/images/${explanation.img}`} alt={"Explanation Image"} className={"explanationImg"} />}
    </div>
  );
};

export default Explanation;
