import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AwsCloudPractitionerFoundational from "../../data/questions/aws-cloud-practitioner-foundational.json";
import AwsDeveloperAssociate from "../../data/questions/aws-developer-associate.json";
import AnswerOptions from "./AnswerOptions";
import ProgressBar from "./ProgressBar";
import "./Quiz.css";

export interface Option {
  option: string;
  explanation: string;
}

export interface Question {
  id: number;
  text: string;
  type: string;
  answer: string;
  assignedAnswer: string | null;
  options: Option[];
}

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const certParameter = queryParams.get("cert");
  const certTitle = queryParams.get("title");
  const certLevel = queryParams.get("level");

  const [certification, setCertification] = useState<Question[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [incorrectQuestions, setIncorrectQuestions] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (certParameter === "aws" && certTitle === "Cloud Practitioner" && certLevel === "Foundational") {
      setCertification(AwsCloudPractitionerFoundational);
    }
    if (certParameter === "aws" && certTitle === "Developer" && certLevel === "Associate") {
      setCertification(AwsDeveloperAssociate);
    }
  }, [certParameter, certTitle, certLevel]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswerSelected(true);
    // Don't set result here, only set selected answer and flag for submission
  };

  const handleSubmit = () => {
    if (certification && selectedAnswer) {
      const currentQuestion = certification[currentQuestionIndex];
      const isCorrect = currentQuestion.answer === selectedAnswer;

      // Find the selected option and its explanation
      const selectedOption = currentQuestion.options.find((option) => option.option === selectedAnswer);
      const explanation = selectedOption ? selectedOption.explanation : "No explanation available.";
      setResult(explanation);

      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
        setIncorrectQuestions((prev) => new Set([...prev].filter((index) => index !== currentQuestionIndex)));
      } else {
        setIncorrectQuestions((prev) => new Set(prev.add(currentQuestionIndex)));
      }

      setShowNext(true);
    }
  };

  const handleNext = () => {
    if (certification && incorrectQuestions.size > 0) {
      const nextIncorrectQuestionIndex = Array.from(incorrectQuestions)[0];
      setCurrentQuestionIndex(nextIncorrectQuestionIndex);
      setIncorrectQuestions((prev) => {
        const newSet = new Set(prev);
        newSet.delete(nextIncorrectQuestionIndex);
        return newSet;
      });
      setResult(null);
      setShowNext(false);
      setIsAnswerSelected(false);
      setSelectedAnswer(null);
    } else if (certification && currentQuestionIndex < certification.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setResult(null);
      setShowNext(false);
      setIsAnswerSelected(false);
      setSelectedAnswer(null);
    } else {
      setResult("Lesson complete!");
      setShowNext(false);
    }
  };

  const currentQuestion = certification ? certification[currentQuestionIndex] : null;

  return (
    <div className='quiz'>
      <div className='header'>
        <ProgressBar current={correctAnswers} total={certification ? certification.length : 0} />
      </div>
      {currentQuestion && (
        <div className='question-container'>
          <p>{currentQuestion.text}</p>
          <div className='answers'>
            {currentQuestion.options.map((option, index) => (
              <AnswerOptions key={index} answer={option.option} onClick={() => handleAnswer(option.option)} isAssigned={currentQuestion.assignedAnswer === option.option} isSelected={selectedAnswer === option.option} disabled={showNext} />
            ))}
          </div>
          {result && <p className='result'>{result}</p>}
          <button className='submit-button' onClick={showNext ? handleNext : handleSubmit} disabled={!isAnswerSelected}>
            {showNext ? "Next" : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Lesson;
