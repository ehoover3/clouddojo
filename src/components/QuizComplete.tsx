import React from "react";
import TextDisplay from "./TextDisplay";
import Button from "./Button";

interface QuizCompletionProps {
  onRestart: () => void;
}

const QuizComplete: React.FC<QuizCompletionProps> = ({ onRestart }) => {
  return (
    <div>
      <TextDisplay text='Quiz Completed!' />
      <Button text='Restart Quiz' onClick={onRestart} />
    </div>
  );
};

export default QuizComplete;
