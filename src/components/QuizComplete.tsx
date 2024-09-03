import React from "react";
import TextDisplay from "./TextDisplay";
import Button from "./Button";
import LineGap from "./LineGap";

interface QuizCompletionProps {
  restartQuiz: () => void;
}

const QuizComplete: React.FC<QuizCompletionProps> = ({ restartQuiz: onRestart }) => {
  return (
    <div>
      <TextDisplay text='Quiz Completed!' fontSize='25px' fontWeight='700' />
      <LineGap margin={"16px"} />
      <Button text='Restart Quiz' onClick={onRestart} width='90vw' />
    </div>
  );
};

export default QuizComplete;
