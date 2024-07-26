// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import AwsCloudPractitionerFoundational from "../../data/questions/aws-cloud-practitioner-foundational.json";
// import AwsDeveloperAssociate from "../../data/questions/aws-developer-associate.json";
// import AnswerOptions from "./AnswerOptions";
// import ProgressBar from "./ProgressBar";
// import SubmitButton from "./SubmitButton";
// import Explanation from "./Explanation";
// import QuestionText from "./QuestionText";
// import "./Quiz.css";

// export interface Option {
//   option: string;
//   explanation: string;
// }

// export interface Question {
//   id: number;
//   text: string;
//   type: string;
//   answer: string;
//   assignedAnswer: string | null;
//   options: Option[];
// }

// const getCertificationData = (certParameter: string | null, certTitle: string | null, certLevel: string | null) => {
//   if (certParameter === "aws" && certTitle === "Cloud Practitioner" && certLevel === "Foundational") {
//     return AwsCloudPractitionerFoundational;
//   }
//   if (certParameter === "aws" && certTitle === "Developer" && certLevel === "Associate") {
//     return AwsDeveloperAssociate;
//   }
//   return null;
// };

// const Lesson = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const certParameter = queryParams.get("cert");
//   const certTitle = queryParams.get("title");
//   const certLevel = queryParams.get("level");

//   const [certification, setCertification] = useState<Question[] | null>(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [explanation, setExplanation] = useState<string | null>(null);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [showNext, setShowNext] = useState(false);
//   const [isAnswerSelected, setIsAnswerSelected] = useState(false);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [incorrectQuestions, setIncorrectQuestions] = useState<Set<number>>(new Set());

//   useEffect(() => {
//     setCertification(getCertificationData(certParameter, certTitle, certLevel));
//   }, [certParameter, certTitle, certLevel]);

//   const handleAnswer = (answer: string) => {
//     setSelectedAnswer(answer);
//     setIsAnswerSelected(true);
//   };

//   const handleSubmit = () => {
//     if (certification && selectedAnswer) {
//       const currentQuestion = certification[currentQuestionIndex];
//       const isCorrect = currentQuestion.answer === selectedAnswer;
//       const selectedOption = currentQuestion.options.find((option) => option.option === selectedAnswer);
//       const reason = selectedOption ? selectedOption.explanation : "No explanation available.";

//       setExplanation(reason);
//       setCorrectAnswers((prev) => (isCorrect ? prev + 1 : prev));
//       setIncorrectQuestions((prev) => (isCorrect ? new Set([...prev].filter((index) => index !== currentQuestionIndex)) : new Set(prev.add(currentQuestionIndex))));
//       setShowNext(true);
//     }
//   };

//   const handleNext = () => {
//     if (certification) {
//       if (incorrectQuestions.size > 0) {
//         const nextIncorrectQuestionIndex = Array.from(incorrectQuestions)[0];
//         setCurrentQuestionIndex(nextIncorrectQuestionIndex);
//         setIncorrectQuestions((prev) => {
//           const newSet = new Set(prev);
//           newSet.delete(nextIncorrectQuestionIndex);
//           return newSet;
//         });
//       } else if (currentQuestionIndex < certification.length - 1) {
//         setCurrentQuestionIndex((prev) => prev + 1);
//       } else {
//         setExplanation("Lesson complete!");
//       }

//       clearSelectedAnswer();
//     }
//   };

//   const clearSelectedAnswer = () => {
//     setExplanation(null);
//     setShowNext(false);
//     setIsAnswerSelected(false);
//     setSelectedAnswer(null);
//   };

//   const currentQuestion = certification ? certification[currentQuestionIndex] : null;

//   return (
//     <div className='quiz'>
//       <ProgressBar current={correctAnswers} total={certification ? certification.length : 0} />
//       {currentQuestion && (
//         <div className='question-container'>
//           <QuestionText text={currentQuestion.text} />
//           <AnswerOptions options={currentQuestion.options} selectedAnswer={selectedAnswer} assignedAnswer={currentQuestion.assignedAnswer} onClick={handleAnswer} disabled={showNext} />
//           <Explanation explanation={explanation} />
//           <SubmitButton showNext={showNext} onClick={showNext ? handleNext : handleSubmit} disabled={!isAnswerSelected} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Lesson;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AwsCloudPractitionerFoundational from "../../data/questions/aws-cloud-practitioner-foundational.json";
import AwsDeveloperAssociate from "../../data/questions/aws-developer-associate.json";
import AnswerOptions from "./AnswerOptions";
import ProgressBar from "./ProgressBar";
import SubmitButton from "./SubmitButton";
import Explanation from "./Explanation";
import QuestionText from "./QuestionText";
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

const getCertificationData = (certParameter: string | null, certTitle: string | null, certLevel: string | null) => {
  if (certParameter === "aws" && certTitle === "Cloud Practitioner" && certLevel === "Foundational") {
    return AwsCloudPractitionerFoundational;
  }
  if (certParameter === "aws" && certTitle === "Developer" && certLevel === "Associate") {
    return AwsDeveloperAssociate;
  }
  return null;
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
  const [explanation, setExplanation] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [incorrectQuestions, setIncorrectQuestions] = useState<Set<number>>(new Set());

  useEffect(() => {
    const data = getCertificationData(certParameter, certTitle, certLevel);
    if (data) {
      setCertification(data);
      // Initialize the question queue with question indices
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
      const selectedOption = currentQuestion.options.find((option) => option.option === selectedAnswer);
      const reason = selectedOption ? selectedOption.explanation : "No explanation available.";

      setExplanation(reason);
      setCorrectAnswers((prev) => (isCorrect ? prev + 1 : prev));
      setIncorrectQuestions((prev) => (isCorrect ? new Set([...prev].filter((index) => index !== questionQueue[currentQuestionIndex])) : new Set(prev.add(questionQueue[currentQuestionIndex]))));
      setShowNext(true);
    }
  };

  const handleNext = () => {
    if (certification) {
      if (incorrectQuestions.size > 0) {
        // Re-queue incorrect questions
        const newQueue = [...questionQueue, ...Array.from(incorrectQuestions)];
        setQuestionQueue(newQueue);
        setIncorrectQuestions(new Set());
      }

      if (currentQuestionIndex < questionQueue.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setExplanation("Lesson complete!");
      }

      clearSelectedAnswer();
    }
  };

  const clearSelectedAnswer = () => {
    setExplanation(null);
    setShowNext(false);
    setIsAnswerSelected(false);
    setSelectedAnswer(null);
  };

  const currentQuestion = certification ? certification[questionQueue[currentQuestionIndex]] : null;

  return (
    <div className='quiz'>
      <ProgressBar current={correctAnswers} total={certification ? certification.length : 0} />
      {currentQuestion && (
        <div className='question-container'>
          <QuestionText text={currentQuestion.text} />
          <AnswerOptions options={currentQuestion.options} selectedAnswer={selectedAnswer} assignedAnswer={currentQuestion.assignedAnswer} onClick={handleAnswer} disabled={showNext} />
          <Explanation explanation={explanation} />
          <SubmitButton showNext={showNext} onClick={showNext ? handleNext : handleSubmit} disabled={!isAnswerSelected} />
        </div>
      )}
    </div>
  );
};

export default Lesson;
