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
  const [questions, setQuestions] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    const initialQuizModule = getQuiz(certParameter, certTitle, certLevel);
    if (initialQuizModule) {
      const shuffledQuizModule = shuffleAnswerOptions(initialQuizModule);
      setQuiz(shuffledQuizModule);
      setQuestions(shuffledQuizModule.map((_: any, index: any) => index));
    }
  }, [certParameter, certTitle, certLevel]);

  const completeQuiz = () => {
    setIsQuizComplete(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setCorrectCount(0);
    setIsQuizComplete(false);
    if (quiz) setQuestions(quiz.map((_, index) => index));
  };

  const showQuestion = (question: Question) => {
    switch (question.type) {
      case "multiple-choice":
        return <MultipleChoice quiz={quiz} questions={questions} currentQuestion={currentQuestion} setQuestions={setQuestions} setCurrentQuestion={setCurrentQuestion} setCorrectCount={setCorrectCount} completeQuiz={completeQuiz} />;
      case "matching":
        return <Matching quiz={quiz} questions={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} setCorrectCount={setCorrectCount} completeQuiz={completeQuiz} />;
      case "fill-in-the-blank":
        return <FillInTheBlank />;
      default:
        return <div>Unsupported question type: {question.type}</div>;
    }
  };

  return (
    <div className='quiz'>
      {questions}
      <p> {currentQuestion}</p>
      <ProgressBar correctCount={correctCount} total={quiz ? quiz.length : 0} />
      {!isQuizComplete ? quiz && showQuestion(quiz[questions[currentQuestion]]) : <QuizComplete restartQuiz={restartQuiz} />}
    </div>
  );
};

export default Lesson;
