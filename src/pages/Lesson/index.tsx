import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AwsCloudPractitionerFoundational from "../../data/questions/aws-cloud-practitioner-foundational.json";
import AwsDeveloperAssociate from "../../data/questions/aws-developer-associate.json";
import QuestionType_MultipleChoice from "./QuestionType_MultipleChoice";
import ProgressBar from "./ProgressBar";
import "./index.css";
import QuizCompletion from "./QuizCompletion";
import QuestionType_Matching from "./QuestionType_Matching";

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
  answer?: string;
  answerPairs?: string[];
  assignedAnswer: any | null;
  answerOptions: MultipleChoiceOption[] | MatchingOption | any;
}

const getCertificationData = (certParameter: string | null, certTitle: string | null, certLevel: string | null) => {
  if (certParameter === "aws") {
    if (certTitle === "Cloud Practitioner" && certLevel === "Foundational") {
      return AwsCloudPractitionerFoundational;
    }
    if (certTitle === "Developer" && certLevel === "Associate") {
      return AwsDeveloperAssociate;
    }
  }
  return null;
};

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

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

  // get initial questions
  useEffect(() => {
    const questionSet = getCertificationData(certParameter, certTitle, certLevel);
    if (questionSet) {
      const shuffledData: any = questionSet.map((question) => ({
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
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
      {/* TESTING: Start Delete Later */}
      <div>
        {certification ? (
          <div>
            answeredCorrectlyCount: {answeredCorrectlyCount}, total: {certification?.length}
          </div>
        ) : (
          ""
        )}
      </div>
      {/* TESTING: End Delete Later */}
      <ProgressBar current={answeredCorrectlyCount} total={certification ? certification.length : 0} />
      {isQuizComplete ? (
        <QuizCompletion certParameter={certParameter} onRestart={handleRestartQuiz} />
      ) : (
        certification &&
        (certification[questionQueue[currentQuestionIndex]].type === "multiple-choice" ? (
          <QuestionType_MultipleChoice
            certification={certification}
            currentQuestion={certification[questionQueue[currentQuestionIndex]]}
            questionQueue={questionQueue}
            setQuestionQueue={setQuestionQueue}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            answeredCorrectlyCount={answeredCorrectlyCount}
            setAnsweredCorrectlyCount={setAnsweredCorrectlyCount}
            incorrectQuestions={incorrectQuestions}
            setIncorrectQuestions={setIncorrectQuestions}
            onQuizComplete={handleQuizComplete}
          />
        ) : (
          <QuestionType_Matching
            certification={certification}
            currentQuestion={certification[questionQueue[currentQuestionIndex]]}
            questionQueue={questionQueue}
            setQuestionQueue={setQuestionQueue}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            answeredCorrectlyCount={answeredCorrectlyCount}
            setAnsweredCorrectlyCount={setAnsweredCorrectlyCount}
            incorrectQuestions={incorrectQuestions}
            setIncorrectQuestions={setIncorrectQuestions}
            onQuizComplete={handleQuizComplete}
          />
        ))
      )}
    </div>
  );
};

export default Lesson;
