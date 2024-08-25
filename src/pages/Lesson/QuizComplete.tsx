interface QuizCompletionProps {
  onRestart: () => void;
}

const QuizComplete: React.FC<QuizCompletionProps> = ({ onRestart }) => {
  return (
    <div>
      <h1>Quiz Completed!</h1>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default QuizComplete;
