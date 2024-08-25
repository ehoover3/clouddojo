import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import QuizComplete from "../components/QuizComplete";
import getQuiz from "../utils/getQuiz";
import { shuffleAnswerOptions } from "../utils/shuffleAnswerOptions";
import FillInTheBlank from "../components/FillInTheBlank";
import MultipleChoice from "../components/MultipleChoice";
import Matching from "../components/Matching";

export interface MultipleChoice {
  answerImg: string;
  answerText: string;
  explanationText: string;
  explanationImg: string;
}

export interface Matching {
  left: any;
  right: any;
}

export interface Question {
  id: number;
  text: string;
  type: string;
  answer?: string[] | undefined;
  answerPairs?: any;
  assignedAnswer: any | null;
  answerOptions: MultipleChoice[] | Matching | any;
}

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const certParameter = queryParams.get("cert");
  const certTitle = queryParams.get("title");
  const certLevel = queryParams.get("level");

  const [quiz, setQuiz] = useState<Question[] | null>(null);
  const [questionsToAsk, setQuestionsToAsk] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    const initialQuizModule = getQuiz(certParameter, certTitle, certLevel);
    if (initialQuizModule) {
      const shuffledQuizModule = shuffleAnswerOptions(initialQuizModule);
      setQuiz(shuffledQuizModule);
      setQuestionsToAsk(shuffledQuizModule.map((_: any, index: any) => index));
    }
  }, [certParameter, certTitle, certLevel]);

  const completeQuiz = () => {
    setIsQuizComplete(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setIsQuizComplete(false);
    if (quiz) setQuestionsToAsk(quiz.map((_, index) => index));
  };

  const showQuestion = (question: Question) => {
    switch (question.type) {
      case "multiple-choice":
        return <MultipleChoice quiz={quiz} questionsToAsk={questionsToAsk} currentQuestionIndex={currentQuestionIndex} setQuestionsToAsk={setQuestionsToAsk} setCurrentQuestion={setCurrentQuestionIndex} setCorrectCount={setCorrectCount} completeQuiz={completeQuiz} />;
      case "matching":
        return <Matching quiz={quiz} questionsToAsk={questionsToAsk} currentQuestionIndex={currentQuestionIndex} setCurrentQuestion={setCurrentQuestionIndex} setCorrectCount={setCorrectCount} completeQuiz={completeQuiz} />;
      case "fill-in-the-blank":
        return <FillInTheBlank quiz={quiz} questionsToAsk={questionsToAsk} currentQuestionIndex={currentQuestionIndex} setQuestionsToAsk={setQuestionsToAsk} setCurrentQuestion={setCurrentQuestionIndex} setCorrectCount={setCorrectCount} completeQuiz={completeQuiz} />;

      default:
        return <div>Unsupported question type: {question.type}</div>;
    }
  };

  return (
    <div className='quiz'>
      <ProgressBar correctCount={correctCount} total={quiz ? quiz.length : 0} />
      {!isQuizComplete ? quiz && showQuestion(quiz[questionsToAsk[currentQuestionIndex]]) : <QuizComplete restartQuiz={restartQuiz} />}
    </div>
  );
};

export default Lesson;
