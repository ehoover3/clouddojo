import React from "react";
import { Link } from "react-router-dom";

interface QuizCompletionProps {
  certParameter: string | null;
}

const QuizCompletion: React.FC<QuizCompletionProps> = ({ certParameter }) => (
  <div className='quiz-completion'>
    <h2>Quiz Complete!</h2>
    <button onClick={() => window.location.reload()}>Restart Quiz</button>
    <Link to={`/learn?cert=${certParameter}`} className='submit-button'>
      Back to Learn
    </Link>
  </div>
);

export default QuizCompletion;
