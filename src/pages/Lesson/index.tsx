import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./index.css";
import QuestionType from "./QuestionTypes/index";
import QuizComplete from "./QuizComplete";
import getCertification from "./GetCertification";
import { shuffleAnswerOptions } from "./shuffleAnswerOptions";

export interface MultipleChoiceOption {
  answerImg: string;
  answerText: string;
  explanationText: string;
  explanationImg: string;
}

export interface MatchingOption {
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
  answerOptions: MultipleChoiceOption[] | MatchingOption | any;
}

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const certParameter = queryParams.get("cert");
  const certTitle = queryParams.get("title");
  const certLevel = queryParams.get("level");

  const [quizModule, setQuizModule] = useState<Question[] | null>(null);
  const [questionQueue, setQuestionQueue] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredCorrectlyCount, setAnsweredCorrectlyCount] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState<Set<number>>(new Set());
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    const initialQuizModule = getCertification(certParameter, certTitle, certLevel);
    if (initialQuizModule) {
      const shuffledQuizModule = shuffleAnswerOptions(initialQuizModule);
      setQuizModule(shuffledQuizModule);
      setQuestionQueue(shuffledQuizModule.map((_: any, index: any) => index));
    }
  }, [certParameter, certTitle, certLevel]);

  const handleQuizComplete = () => {
    setIsQuizComplete(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnsweredCorrectlyCount(0);
    setIncorrectQuestions(new Set());
    setIsQuizComplete(false);
    if (quizModule) setQuestionQueue(quizModule.map((_, index) => index));
  };

  return (
    <div className='quiz'>
      <ProgressBar current={answeredCorrectlyCount} total={quizModule ? quizModule.length : 0} />
      {!isQuizComplete ? (
        quizModule && (
          <QuestionType
            certification={quizModule}
            currentQuestion={quizModule[questionQueue[currentQuestionIndex]]}
            questionQueue={questionQueue}
            setQuestionQueue={setQuestionQueue}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            setAnsweredCorrectlyCount={setAnsweredCorrectlyCount}
            incorrectQuestions={incorrectQuestions}
            setIncorrectQuestions={setIncorrectQuestions}
            onQuizComplete={handleQuizComplete}
          />
        )
      ) : (
        <QuizComplete onRestart={handleRestartQuiz} />
      )}
    </div>
  );
};

export default Lesson;
