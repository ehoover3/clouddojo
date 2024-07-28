// // import React, { useState, useEffect } from "react";
// // import { Question } from "../../Lesson";

// // interface AnswerOptionsProps {
// //   currentQuestion: Question;
// //   certification: Question[];
// //   questionQueue: number[];
// //   setQuestionQueue: React.Dispatch<React.SetStateAction<number[]>>;
// //   currentQuestionIndex: number;
// //   setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
// //   correctAnswers: number;
// //   setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
// //   incorrectQuestions: Set<number>;
// //   setIncorrectQuestions: React.Dispatch<React.SetStateAction<Set<number>>>;
// //   onQuizComplete: () => void;
// // }

// // const QuestionType_Matching: React.FC<AnswerOptionsProps> = ({ currentQuestion, certification, questionQueue, setQuestionQueue, currentQuestionIndex, setCurrentQuestionIndex, correctAnswers, setCorrectAnswers, incorrectQuestions, setIncorrectQuestions, onQuizComplete }) => {
// //   const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";
// //   const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
// //   const [selectedRight, setSelectedRight] = useState<string | null>(null);
// //   const [matches, setMatches] = useState<{ left: string; right: string }[]>([]);

// //   const handleSelectLeft = (item: string) => {
// //     if (!matches.some((match) => match.left === item)) {
// //       setSelectedLeft(item);
// //     }
// //   };

// //   const handleSelectRight = (item: string) => {
// //     if (!matches.some((match) => match.right === item)) {
// //       setSelectedRight(item);
// //     }
// //   };

// //   useEffect(() => {
// //     if (selectedLeft && selectedRight) {
// //       const correctPair = currentQuestion.answerPairs?.some((pair) => pair[0] === selectedLeft && pair[1] === selectedRight);

// //       if (correctPair) {
// //         setMatches((prevMatches) => [...prevMatches, { left: selectedLeft, right: selectedRight }]);
// //       }

// //       setSelectedLeft(null);
// //       setSelectedRight(null);
// //     }
// //   }, [selectedLeft, selectedRight, currentQuestion.answerPairs]);

// //   const handleNext = () => {
// //     if (currentQuestionIndex < questionQueue.length - 1) {
// //       setCurrentQuestionIndex((prev) => prev + 1);
// //     } else {
// //       onQuizComplete();
// //     }
// //   };

// //   return (
// //     <div>
// //       <p className='question-text'>{currentQuestion.text}</p>
// //       <div className='matching-container' style={{ display: "flex" }}>
// //         <div className='left-items'>
// //           {currentQuestion.answerOptions
// //             .filter((option: any) => option.direction === "left")
// //             .map((option: any, index: any) => (
// //               <div key={index} className={`matching-item ${selectedLeft === option.answerText ? "selected" : ""} ${matches.some((match) => match.left === option.answerText) ? "matched" : ""}`} onClick={() => handleSelectLeft(option.answerText)}>
// //                 {option.answerImg && <img src={`${publicUrl}/images/${option.answerImg}`} style={{ width: "15vw" }} alt='Left option' />}
// //                 {option.answerText}
// //               </div>
// //             ))}
// //         </div>
// //         <div className='right-items'>
// //           {currentQuestion.answerOptions
// //             .filter((option: any) => option.direction === "right")
// //             .map((option: any, index: any) => (
// //               <div key={index} className={`matching-item ${selectedRight === option.answerText ? "selected" : ""} ${matches.some((match) => match.right === option.answerText) ? "matched" : ""}`} onClick={() => handleSelectRight(option.answerText)}>
// //                 {option.answerImg && <img src={`${publicUrl}/images/${option.answerImg}`} style={{ width: "15vw" }} alt='Right option' />}
// //                 {option.answerText}
// //               </div>
// //             ))}
// //         </div>
// //       </div>
// //       <button onClick={handleNext} disabled={matches.length !== currentQuestion.answerPairs?.length}>
// //         Next
// //       </button>
// //     </div>
// //   );
// // };

// // export default QuestionType_Matching;

// import React, { useState, useEffect } from "react";
// import { Question } from "../../Lesson";

// interface AnswerOptionsProps {
//   currentQuestion: Question;
//   certification: Question[];
//   questionQueue: number[];
//   setQuestionQueue: React.Dispatch<React.SetStateAction<number[]>>;
//   currentQuestionIndex: number;
//   setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
//   correctAnswers: number;
//   setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
//   incorrectQuestions: Set<number>;
//   setIncorrectQuestions: React.Dispatch<React.SetStateAction<Set<number>>>;
//   onQuizComplete: () => void;
// }

// const QuestionType_Matching: React.FC<AnswerOptionsProps> = ({ currentQuestion, certification, questionQueue, setQuestionQueue, currentQuestionIndex, setCurrentQuestionIndex, correctAnswers, setCorrectAnswers, incorrectQuestions, setIncorrectQuestions, onQuizComplete }) => {
//   const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";
//   const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
//   const [selectedRight, setSelectedRight] = useState<string | null>(null);
//   const [matches, setMatches] = useState<{ left: string; right: string }[]>([]);

//   const handleSelectLeft = (item: string) => {
//     if (!matches.some((match) => match.left === item)) {
//       setSelectedLeft(item);
//     }
//   };

//   const handleSelectRight = (item: string) => {
//     if (!matches.some((match) => match.right === item)) {
//       setSelectedRight(item);
//     }
//   };

//   useEffect(() => {
//     if (selectedLeft && selectedRight) {
//       const correctPair = currentQuestion.answerPairs?.some((pair) => pair[0] === selectedLeft && pair[1] === selectedRight);

//       if (correctPair) {
//         setMatches((prevMatches) => [...prevMatches, { left: selectedLeft, right: selectedRight }]);
//       }

//       setSelectedLeft(null);
//       setSelectedRight(null);
//     }
//   }, [selectedLeft, selectedRight, currentQuestion.answerPairs]);

//   const handleNext = () => {
//     if (currentQuestionIndex < questionQueue.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       onQuizComplete();
//     }
//   };

//   return (
//     <div>
//       <p className='question-text'>{currentQuestion.text}</p>
//       <div className='matching-container' style={{ display: "flex" }}>
//         <div className='left-items'>
//           {currentQuestion.answerOptions
//             .filter((option: any) => option.direction === "left")
//             .map((option: any, index: any) => (
//               <div key={index} className={`matching-item ${selectedLeft === option.answerText ? "selected" : ""} ${matches.some((match) => match.left === option.answerText) ? "matched" : ""}`} onClick={() => handleSelectLeft(option.answerText)} style={{ backgroundColor: selectedLeft === option.answerText ? "lightblue" : "transparent" }}>
//                 {option.answerImg && <img src={`${publicUrl}/images/${option.answerImg}`} style={{ width: "15vw" }} alt='Left option' />}
//                 {option.answerText}
//               </div>
//             ))}
//         </div>
//         <div className='right-items'>
//           {currentQuestion.answerOptions
//             .filter((option: any) => option.direction === "right")
//             .map((option: any, index: any) => (
//               <div key={index} className={`matching-item ${selectedRight === option.answerText ? "selected" : ""} ${matches.some((match) => match.right === option.answerText) ? "matched" : ""}`} onClick={() => handleSelectRight(option.answerText)} style={{ backgroundColor: selectedRight === option.answerText ? "lightblue" : "transparent" }}>
//                 {option.answerImg && <img src={`${publicUrl}/images/${option.answerImg}`} style={{ width: "15vw" }} alt='Right option' />}
//                 {option.answerText}
//               </div>
//             ))}
//         </div>
//       </div>
//       <button onClick={handleNext} disabled={matches.length !== currentQuestion.answerPairs?.length}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default QuestionType_Matching;

import React, { useState, useEffect } from "react";
import { Question } from "../../Lesson";

interface AnswerOptionsProps {
  currentQuestion: Question;
  certification: Question[];
  questionQueue: number[];
  setQuestionQueue: React.Dispatch<React.SetStateAction<number[]>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  correctAnswers: number;
  setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  incorrectQuestions: Set<number>;
  setIncorrectQuestions: React.Dispatch<React.SetStateAction<Set<number>>>;
  onQuizComplete: () => void;
}

const QuestionType_Matching: React.FC<AnswerOptionsProps> = ({ currentQuestion, certification, questionQueue, setQuestionQueue, currentQuestionIndex, setCurrentQuestionIndex, correctAnswers, setCorrectAnswers, incorrectQuestions, setIncorrectQuestions, onQuizComplete }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ left: string; right: string }[]>([]);

  const handleSelectLeft = (item: string) => {
    if (!matches.some((match) => match.left === item)) {
      setSelectedLeft(item);
    }
  };

  const handleSelectRight = (item: string) => {
    if (!matches.some((match) => match.right === item)) {
      setSelectedRight(item);
    }
  };

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      const correctPair = currentQuestion.answerPairs?.some((pair) => pair[0] === selectedLeft && pair[1] === selectedRight);

      if (correctPair) {
        setMatches((prevMatches) => [...prevMatches, { left: selectedLeft, right: selectedRight }]);
      }

      setSelectedLeft(null);
      setSelectedRight(null);
    }
  }, [selectedLeft, selectedRight, currentQuestion.answerPairs]);

  const handleNext = () => {
    if (currentQuestionIndex < questionQueue.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      onQuizComplete();
    }
  };

  return (
    <div>
      <p className='question-text'>{currentQuestion.text}</p>
      <div className='matching-container' style={{ display: "flex" }}>
        <div className='left-items'>
          {currentQuestion.answerOptions
            .filter((option: any) => option.direction === "left")
            .map((option: any, index: any) => {
              const isSelected = selectedLeft === option.answerText;
              const isMatched = matches.some((match) => match.left === option.answerText);
              const backgroundColor = isMatched ? "grey" : isSelected ? "lightblue" : "transparent";

              return (
                <div key={index} className={`matching-item ${isSelected ? "selected" : ""} ${isMatched ? "matched" : ""}`} onClick={() => handleSelectLeft(option.answerText)} style={{ backgroundColor }}>
                  {option.answerImg && <img src={`${publicUrl}/images/${option.answerImg}`} style={{ width: "10vw" }} alt='Left option' />}
                  {option.answerText}
                </div>
              );
            })}
        </div>
        <div className='right-items'>
          {currentQuestion.answerOptions
            .filter((option: any) => option.direction === "right")
            .map((option: any, index: any) => {
              const isSelected = selectedRight === option.answerText;
              const isMatched = matches.some((match) => match.right === option.answerText);
              const backgroundColor = isMatched ? "grey" : isSelected ? "lightblue" : "transparent";

              return (
                <div key={index} className={`matching-item ${isSelected ? "selected" : ""} ${isMatched ? "matched" : ""}`} onClick={() => handleSelectRight(option.answerText)} style={{ backgroundColor }}>
                  {option.answerImg && <img src={`${publicUrl}/images/${option.answerImg}`} style={{ width: "10vw" }} alt='Right option' />}
                  {option.answerText}
                </div>
              );
            })}
        </div>
      </div>
      <button onClick={handleNext} disabled={matches.length !== currentQuestion.answerPairs?.length}>
        Next
      </button>
    </div>
  );
};

export default QuestionType_Matching;
