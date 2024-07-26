import React from "react";

interface ExplanationProps {
  explanation: string | null;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation }) => {
  return explanation ? <p className='explanation'>{explanation}</p> : null;
};

export default Explanation;
