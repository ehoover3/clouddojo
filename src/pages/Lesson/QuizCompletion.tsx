interface QuizCompletionProps {
  certParameter: string | null;
  onRestart: () => void;
}

const QuizCompletion: React.FC<QuizCompletionProps> = ({ onRestart }) => {
  return (
    <div>
      <h1>Quiz Completed!</h1>

      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default QuizCompletion;
