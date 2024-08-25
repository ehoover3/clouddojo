import React from "react";
import TextDisplay from "./TextDisplay";
import Button from "./Button";

interface QuizCompletionProps {
  restartQuiz: () => void;
}

const QuizComplete: React.FC<QuizCompletionProps> = ({ restartQuiz: onRestart }) => {
  return (
    <div>
      <TextDisplay text='Quiz Completed!' />
      <Button text='Restart Quiz' onClick={onRestart} />
    </div>
  );
};

export default QuizComplete;
