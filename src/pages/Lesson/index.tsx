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
// import QuizCompletion from "./QuizCompletition";

// export interface Option {
//   answerOption: string;
//   explanationText: string;
//   explanationImg: string;
// }

// export interface Question {
//   id: number;
//   text: string;
//   type: string;
//   answer: string;
//   assignedAnswer: string | null;
//   answerOptions: Option[];
// }

// const getCertificationData = (certParameter: string | null, certTitle: string | null, certLevel: string | null) => {
//   if (certParameter === "aws") {
//     if (certTitle === "Cloud Practitioner" && certLevel === "Foundational") {
//       return AwsCloudPractitionerFoundational;
//     }
//     if (certTitle === "Developer" && certLevel === "Associate") {
//       return AwsDeveloperAssociate;
//     }
//   }
//   return null;
// };

// const shuffleArray = (array: any[]) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// const Lesson = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const certParameter = queryParams.get("cert");
//   const certTitle = queryParams.get("title");
//   const certLevel = queryParams.get("level");

//   const [certification, setCertification] = useState<Question[] | null>(null);
//   const [questionQueue, setQuestionQueue] = useState<number[]>([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [explanationText, setExplanationText] = useState<string | null>(null);
//   const [explanationImg, setExplanationImg] = useState<string>("");
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [showNext, setShowNext] = useState(false);
//   const [isAnswerSelected, setIsAnswerSelected] = useState(false);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [incorrectQuestions, setIncorrectQuestions] = useState<Set<number>>(new Set());
//   const [isQuizComplete, setIsQuizComplete] = useState(false); // Track quiz completion

//   const currentQuestion = certification ? certification[questionQueue[currentQuestionIndex]] : null;

//   useEffect(() => {
//     const data = getCertificationData(certParameter, certTitle, certLevel);
//     if (data) {
//       setCertification(
//         data.map((question) => ({
//           ...question,
//           answerOptions: shuffleArray(question.answerOptions),
//         }))
//       );
//       setQuestionQueue(data.map((_, index) => index));
//     }
//   }, [certParameter, certTitle, certLevel]);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       const key = event.key;
//       if (currentQuestion && !showNext && !isQuizComplete) {
//         if (key >= "1" && key <= "4") {
//           const index = parseInt(key, 10) - 1;
//           if (index < currentQuestion.answerOptions.length) {
//             handleAnswer(currentQuestion.answerOptions[index].answerOption);
//           }
//         }
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [currentQuestion, showNext, isQuizComplete]);

//   const handleAnswer = (answer: string) => {
//     setSelectedAnswer(answer);
//     setIsAnswerSelected(true);
//   };

//   const handleSubmit = () => {
//     if (certification && selectedAnswer) {
//       const currentQuestion = certification[questionQueue[currentQuestionIndex]];
//       const isCorrect = currentQuestion.answer === selectedAnswer;
//       const selectedOption = currentQuestion.answerOptions.find((option) => option.answerOption === selectedAnswer);
//       const reasonText = selectedOption ? selectedOption.explanationText : "No explanation available.";
//       const reasonImg = selectedOption ? selectedOption.explanationImg : "No img available.";

//       setExplanationText(reasonText);
//       setExplanationImg(reasonImg);
//       setCorrectAnswers((prev) => (isCorrect ? prev + 1 : prev));
//       setIncorrectQuestions((prev) => (isCorrect ? new Set([...prev].filter((index) => index !== questionQueue[currentQuestionIndex])) : new Set(prev.add(questionQueue[currentQuestionIndex]))));
//       setShowNext(true);
//     }
//   };

//   const handleNext = () => {
//     if (certification) {
//       if (currentQuestionIndex < questionQueue.length - 1) {
//         // Move to the next question
//         setCurrentQuestionIndex((prev) => prev + 1);
//         clearSelectedAnswer();
//       } else {
//         // Requeue incorrect questions if any
//         if (incorrectQuestions.size > 0) {
//           const newQueue = [...questionQueue, ...Array.from(incorrectQuestions)];
//           setQuestionQueue(newQueue);
//           setIncorrectQuestions(new Set());
//           setCurrentQuestionIndex(questionQueue.length);
//         } else {
//           setIsQuizComplete(true);
//         }
//       }
//     }
//   };

//   const clearSelectedAnswer = () => {
//     setExplanationText(null);
//     setShowNext(false);
//     setIsAnswerSelected(false);
//     setSelectedAnswer(null);
//     if (certification) {
//       const currentQuestion = certification[questionQueue[currentQuestionIndex]];
//       currentQuestion.answerOptions = shuffleArray(currentQuestion.answerOptions);
//       setCertification([...certification]);
//     }
//   };

//   return (
//     <div className='quiz'>
//       <ProgressBar current={correctAnswers} total={certification ? certification.length : 0} />
//       {isQuizComplete ? (
//         <QuizCompletion certParameter={certParameter} />
//       ) : (
//         currentQuestion && (
//           <div className='question-container'>
//             <QuestionText text={currentQuestion.text} />
//             <AnswerOptions answerOptions={currentQuestion.answerOptions} selectedAnswer={selectedAnswer} assignedAnswer={currentQuestion.assignedAnswer} onClick={handleAnswer} disabled={showNext} />
//             <Explanation explanationText={explanationText} explanationImg={explanationImg} />
//             {showNext ? <SubmitButton showNext={showNext} onClick={handleNext} disabled={!isAnswerSelected} /> : <SubmitButton showNext={showNext} onClick={handleSubmit} disabled={!isAnswerSelected} />}
//           </div>
//         )
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
import QuizCompletion from "./QuizCompletion"; // Corrected spelling

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
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const currentQuestion = certification ? certification[questionQueue[currentQuestionIndex]] : null;

  useEffect(() => {
    const data = getCertificationData(certParameter, certTitle, certLevel);
    if (data) {
      const shuffledData = data.map((question) => ({
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
      }));
      setCertification(shuffledData);
      setQuestionQueue(shuffledData.map((_, index) => index));
    }
  }, [certParameter, certTitle, certLevel]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (currentQuestion && !showNext && !isQuizComplete) {
        if (key >= "1" && key <= "4") {
          const index = parseInt(key, 10) - 1;
          if (index < currentQuestion.answerOptions.length) {
            handleAnswer(currentQuestion.answerOptions[index].answerOption);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestion, showNext, isQuizComplete]);

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
      } else {
        if (incorrectQuestions.size > 0) {
          const newQueue = [...questionQueue, ...Array.from(incorrectQuestions)];
          setQuestionQueue(newQueue);
          setIncorrectQuestions(new Set());
          setCurrentQuestionIndex(questionQueue.length);
          clearSelectedAnswer(); // Ensure answer is cleared when re-queuing
        } else {
          setIsQuizComplete(true);
        }
      }
    }
  };

  const clearSelectedAnswer = () => {
    setExplanationText(null);
    setShowNext(false);
    setIsAnswerSelected(false);
    setSelectedAnswer(null); // Ensure the selected answer is cleared
    if (certification) {
      const currentQuestion = certification[questionQueue[currentQuestionIndex]];
      currentQuestion.answerOptions = shuffleArray(currentQuestion.answerOptions);
      setCertification([...certification]);
    }
  };

  return (
    <div className='quiz'>
      <ProgressBar current={correctAnswers} total={certification ? certification.length : 0} />
      {isQuizComplete ? (
        <QuizCompletion certParameter={certParameter} />
      ) : (
        currentQuestion && (
          <div className='question-container'>
            <QuestionText text={currentQuestion.text} />
            <AnswerOptions answerOptions={currentQuestion.answerOptions} selectedAnswer={selectedAnswer} assignedAnswer={currentQuestion.assignedAnswer} onClick={handleAnswer} disabled={showNext} />
            <Explanation explanationText={explanationText} explanationImg={explanationImg} />
            <SubmitButton showNext={showNext} onClick={showNext ? handleNext : handleSubmit} disabled={!isAnswerSelected} />
          </div>
        )
      )}
    </div>
  );
};

export default Lesson;
