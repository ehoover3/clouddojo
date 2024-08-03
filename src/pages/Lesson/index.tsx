import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import "./index.css";
import { shuffleArray } from "../../utils/shuffleArray";
import QuestionType from "./QuestionTypes/index";
import QuizCompletion from "./QuizCompletion";
import getCertification from "./GetCertification";

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
  answerPairs?: string[];
  assignedAnswer: any | null;
  answerOptions: MultipleChoiceOption[] | MatchingOption | any;
}

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const certParameter = queryParams.get("cert");
  const certTitle = queryParams.get("title");
  const certLevel = queryParams.get("level");

  const [certification, setCertification] = useState<Question[] | null>(null);
  const [questionQueue, setQuestionQueue] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredCorrectlyCount, setAnsweredCorrectlyCount] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState<Set<number>>(new Set());
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    const questionSet = getCertification(certParameter, certTitle, certLevel);
    if (questionSet) {
      const shuffledData: any = questionSet.map((question) => ({
        ...question,
        answerOptions: shuffleArray([...question.answerOptions]),
      }));
      setCertification(shuffledData);
      setQuestionQueue(shuffledData.map((_: any, index: any) => index));
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
    if (certification) {
      setQuestionQueue(certification.map((_, index) => index));
    }
  };

  return (
    <div className='quiz'>
      <ProgressBar current={answeredCorrectlyCount} total={certification ? certification.length : 0} />
      {isQuizComplete ? (
        <QuizCompletion certParameter={certParameter} onRestart={handleRestartQuiz} />
      ) : (
        certification && (
          <QuestionType
            certification={certification}
            currentQuestion={certification[questionQueue[currentQuestionIndex]]}
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
      )}
    </div>
  );
};

export default Lesson;
