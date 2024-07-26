import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import AwsCloudPractitionerFoundational from "../../data/questions/aws-cloud-practitioner-foundational.json";
import AwsDeveloperAssociate from "../../data/questions/aws-developer-associate.json";
import AnswerOptions from "./AnswerOptions";
import ProgressBar from "./ProgressBar";
import SubmitButton from "./SubmitButton";
import Explanation from "./Explanation";
import QuestionText from "./QuestionText";
import "./Quiz.css";

export interface Option {
  answerOption: string;
  explanationText: string;
  explanationImg: string;
}

export interface Question {
  id: number;
  text: string;
  type: string;
  answer: string;
  assignedAnswer: string | null;
  answerOptions: Option[];
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
  const [explanationText, setExplanationText] = useState<string | null>(null);
  const [explanationImg, setExplanationImg] = useState<string>("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [incorrectQuestions, setIncorrectQuestions] = useState<Set<number>>(new Set());

  useEffect(() => {
    const data = getCertificationData(certParameter, certTitle, certLevel);
    if (data) {
      setCertification(
        data.map((question) => ({
          ...question,
          options: shuffleArray(question.answerOptions),
        }))
      );
      setQuestionQueue(data.map((_, index) => index));
    }
  }, [certParameter, certTitle, certLevel]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswerSelected(true);
  };

  const handleSubmit = () => {
    if (certification && selectedAnswer) {
      const currentQuestion = certification[questionQueue[currentQuestionIndex]];
      const isCorrect = currentQuestion.answer === selectedAnswer;
      const selectedOption = currentQuestion.answerOptions.find((option) => option.answerOption === selectedAnswer);
      const reasonText = selectedOption ? selectedOption.explanationText : "No explanation available.";
      const reasonImg = selectedOption ? selectedOption.explanationImg : "No img available.";

      setExplanationText(reasonText);
      setExplanationImg(reasonImg);
      setCorrectAnswers((prev) => (isCorrect ? prev + 1 : prev));
      setIncorrectQuestions((prev) => (isCorrect ? new Set([...prev].filter((index) => index !== questionQueue[currentQuestionIndex])) : new Set(prev.add(questionQueue[currentQuestionIndex]))));
      setShowNext(true);
    }
  };

  const handleNext = () => {
    if (certification) {
      if (currentQuestionIndex < questionQueue.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        clearSelectedAnswer();
      }

      if (incorrectQuestions.size > 0) {
        const newQueue = [...questionQueue, ...Array.from(incorrectQuestions)];
        setQuestionQueue(newQueue);
        setIncorrectQuestions(new Set());
      }
    }
  };

  const clearSelectedAnswer = () => {
    setExplanationText(null);
    setShowNext(false);
    setIsAnswerSelected(false);
    setSelectedAnswer(null);
    if (certification) {
      const currentQuestion = certification[questionQueue[currentQuestionIndex]];
      currentQuestion.answerOptions = shuffleArray(currentQuestion.answerOptions);
      setCertification([...certification]);
    }
  };

  const currentQuestion = certification ? certification[questionQueue[currentQuestionIndex]] : null;

  return (
    <div className='quiz'>
      <ProgressBar current={correctAnswers} total={certification ? certification.length : 0} />
      {currentQuestion && (
        <div className='question-container'>
          <QuestionText text={currentQuestion.text} />
          <AnswerOptions answerOptions={currentQuestion.answerOptions} selectedAnswer={selectedAnswer} assignedAnswer={currentQuestion.assignedAnswer} onClick={handleAnswer} disabled={showNext} />
          <Explanation explanationText={explanationText} explanationImg={explanationImg} />
          {showNext ? (
            currentQuestionIndex < questionQueue.length - 1 ? (
              <SubmitButton showNext={showNext} onClick={handleNext} disabled={!isAnswerSelected} />
            ) : (
              <Link to={`/learn?cert=${certParameter}`} className='submit-button'>
                Back to Learn
              </Link>
            )
          ) : (
            <SubmitButton showNext={showNext} onClick={handleSubmit} disabled={!isAnswerSelected} />
          )}
        </div>
      )}
    </div>
  );
};

export default Lesson;
