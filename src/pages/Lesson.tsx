import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import QuizComplete from "../components/QuizComplete";
import getQuiz from "../utils/getQuiz";
import { shuffleAnswerOptions } from "../utils/shuffleAnswerOptions";
import FillInTheBlank from "../components/FillInTheBlank";
import MultipleChoice from "../components/MultipleChoice";
import Matching from "../components/Matching";
import OrderPhrase from "../components/OrderPhrase";
import LineGap from "../components/LineGap";

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
  assignedAnswer?: any | null;
  answerOptions?: MultipleChoice[] | Matching | any;
  explanationText?: string;
}

const Lesson = () => {
  const location = useLocation();
  const quizType = location.state?.quizType as string; // Get quizType from state

  const [quiz, setQuiz] = useState<Question[] | null>(null);
  const [questionsToAsk, setQuestionsToAsk] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    if (quizType) {
      const initialQuiz = getQuiz(quizType);
      if (initialQuiz) {
        const shuffledQuizModule = shuffleAnswerOptions(initialQuiz);
        setQuiz(shuffledQuizModule);
        setQuestionsToAsk(shuffledQuizModule.map((_: any, index: any) => index));
      }
    }
  }, [quizType]);

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
      case "order-phrase":
        return <OrderPhrase quiz={quiz} questionsToAsk={questionsToAsk} currentQuestionIndex={currentQuestionIndex} setQuestionsToAsk={setQuestionsToAsk} setCurrentQuestion={setCurrentQuestionIndex} setCorrectCount={setCorrectCount} completeQuiz={completeQuiz} />;
      default:
        return <div>Unsupported question type: {question.type}</div>;
    }
  };

  return (
    <div>
      <ProgressBar correctCount={correctCount} total={quiz ? quiz.length : 0} />
      {!isQuizComplete ? quiz && showQuestion(quiz[questionsToAsk[currentQuestionIndex]]) : <QuizComplete restartQuiz={restartQuiz} />}
    </div>
  );
};

export default Lesson;
