import React from "react";

interface ExplanationProps {
  explanationText: string | null;
  explanationImg: string;
}

const Explanation: React.FC<ExplanationProps> = ({ explanationText, explanationImg }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";

  return explanationText ? (
    <div>
      <p className='explanation'>{explanationText}</p>
      <img src={`${publicUrl}/images/${explanationImg}`} alt='Explanation Image' style={{ width: "25vw" }} />
    </div>
  ) : null;
};

export default Explanation;
