// import React, { useState } from "react";
// import TextDisplay from "./TextDisplay";
// import Button from "./Button";
// import Explanation from "./Explanation";

// interface OrderPhraseProps {
//   quiz: any;
//   questionsToAsk: number[];
//   currentQuestionIndex: number;
//   setQuestionsToAsk: React.Dispatch<React.SetStateAction<number[]>>;
//   setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
//   completeQuiz: () => void;
//   setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
// }

// const OrderPhrase: React.FC<OrderPhraseProps> = ({ quiz, questionsToAsk, currentQuestionIndex, setQuestionsToAsk, setCurrentQuestion, completeQuiz, setCorrectCount }) => {
//   const [selectedAnswerOptions, setSelectedAnswerOptions] = useState<string[]>([]);
//   const [submitted, setSubmitted] = useState<boolean>(false);
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

//   const handleSelectPhrase = (answerText: string) => {
//     if (selectedAnswerOptions.includes(answerText)) {
//       setSelectedAnswerOptions(selectedAnswerOptions.filter((item) => item !== answerText));
//     } else {
//       setSelectedAnswerOptions([...selectedAnswerOptions, answerText]);
//     }
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//     const isAnswer = JSON.stringify(selectedAnswerOptions) === JSON.stringify(question.answer);
//     setIsCorrect(isAnswer);
//     if (isAnswer) {
//       setCorrectCount((count) => count + 1);
//     } else {
//       setQuestionsToAsk((prev) => [...prev, questionsToAsk[currentQuestionIndex]]);
//     }

//     // Determine next step
//     const isLastQuestion = currentQuestionIndex >= questionsToAsk.length - 1;
//     if (isLastQuestion) {
//       completeQuiz();
//     } else {
//       setCurrentQuestion((prev) => prev + 1);
//     }
//   };

//   // start
//   const question = quiz[questionsToAsk[currentQuestionIndex]];
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [explanation, setExplanation] = useState<{ text: string; img: string }>({ text: "", img: "" });
//   const [isCheckBtnClicked, setIsCheckButtonClicked] = useState(false);
//   const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

//   const handleAnswer = (answer: string) => {
//     setSelectedAnswer(answer);
//   };

//   const handleCheck = () => {
//     if (selectedAnswer) {
//       const isCorrect = question.answer?.[0] === selectedAnswer;
//       const selectedOption = question.answerOptions.find((option: any) => option.answerText === selectedAnswer);
//       setExplanation({
//         text: selectedOption ? selectedOption.explanationText : "No explanation available.",
//         img: selectedOption ? selectedOption.explanationImg : "No img available.",
//       });
//       setIsCorrectAnswer(isCorrect);
//       setCorrectCount((prev: any) => (isCorrect ? prev + 1 : prev));
//       if (!isCorrect) {
//         setQuestionsToAsk((prev) => [...prev, questionsToAsk[currentQuestionIndex]]);
//       }
//       setIsCheckButtonClicked(true);
//     }
//   };

//   const handleContinue = () => {
//     const isLastQuestion = currentQuestionIndex >= questionsToAsk.length - 1;
//     if (!isLastQuestion) {
//       setCurrentQuestion((prev) => prev + 1);
//       clearSelectedAnswer();
//     } else completeQuiz();
//   };

//   const clearSelectedAnswer = () => {
//     setExplanation({ text: "", img: "" });
//     setIsCheckButtonClicked(false);
//     setSelectedAnswer(null);
//     setIsCorrectAnswer(null);
//   };
//   // finish

//   return (
//     <div>
//       <TextDisplay text={question.text} />
//       <div className='order-phrase-container'>
//         <div className='placeholder-box'>
//           {selectedAnswerOptions.map((item, index) => (
//             <div key={index} className='selected-item'>
//               {item}
//             </div>
//           ))}
//         </div>
//         <div className='answer-options'>
//           {question.answerOptions.map((option: any, index: any) => (
//             <button key={index} onClick={() => handleSelectPhrase(option.answerText)} className={`answer-option ${selectedAnswerOptions.includes(option.answerText) ? "selected" : ""}`}>
//               {option.answerText}
//             </button>
//           ))}
//         </div>
//       </div>
//       <Explanation explanation={explanation} isCorrectAnswer={isCorrectAnswer} />
//       <Button text={isCheckBtnClicked ? "Continue" : "Check"} onClick={isCheckBtnClicked ? handleContinue : handleCheck} disabled={!selectedAnswer && !isCheckBtnClicked} className={isCheckBtnClicked ? "btn-green" : selectedAnswer ? "btn-blue" : "btn-gray"} />
//     </div>
//   );
// };

// export default OrderPhrase;

import React, { useState, useEffect } from "react";
import TextDisplay from "./TextDisplay";
import Button from "./Button";
import Explanation from "./Explanation";

interface OrderPhraseProps {
  quiz: any;
  questionsToAsk: number[];
  currentQuestionIndex: number;
  setQuestionsToAsk: React.Dispatch<React.SetStateAction<number[]>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  completeQuiz: () => void;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
}

const OrderPhrase: React.FC<OrderPhraseProps> = ({ quiz, questionsToAsk, currentQuestionIndex, setQuestionsToAsk, setCurrentQuestion, completeQuiz, setCorrectCount }) => {
  const question = quiz[questionsToAsk[currentQuestionIndex]];
  const [selectedAnswerOptions, setSelectedAnswerOptions] = useState<string[]>([]);
  const [explanation, setExplanation] = useState<{ text: string; img: string }>({ text: "", img: "" });
  const [isCheckBtnClicked, setIsCheckButtonClicked] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const handleSelectPhrase = (answerText: string) => {
    if (selectedAnswerOptions.includes(answerText)) {
      setSelectedAnswerOptions(selectedAnswerOptions.filter((item) => item !== answerText));
    } else {
      setSelectedAnswerOptions([...selectedAnswerOptions, answerText]);
    }
  };

  const handleCheck = () => {
    if (selectedAnswerOptions.length === question.answer.length) {
      const isCorrect = JSON.stringify(selectedAnswerOptions) === JSON.stringify(question.answer);
      const selectedOption = question.answerOptions.find((option: any) => option.answerText === selectedAnswerOptions.join(", "));
      setExplanation({
        text: selectedOption ? selectedOption.explanationText : "No explanation available.",
        img: selectedOption ? selectedOption.explanationImg : "No img available.",
      });
      setIsCorrectAnswer(isCorrect);
      setCorrectCount((prev: any) => (isCorrect ? prev + 1 : prev));
      if (!isCorrect) {
        setQuestionsToAsk((prev) => [...prev, questionsToAsk[currentQuestionIndex]]);
      }
      setIsCheckButtonClicked(true);
    }
  };

  const handleContinue = () => {
    const isLastQuestion = currentQuestionIndex >= questionsToAsk.length - 1;
    if (!isLastQuestion) {
      setCurrentQuestion((prev) => prev + 1);
      clearSelectedAnswer();
    } else {
      completeQuiz();
    }
  };

  const clearSelectedAnswer = () => {
    setSelectedAnswerOptions([]);
    setExplanation({ text: "", img: "" });
    setIsCheckButtonClicked(false);
    setIsCorrectAnswer(null);
  };

  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      const key = event.key;
      if (!isCheckBtnClicked) {
        if (key >= "1" && key <= question.answerOptions.length.toString()) {
          const index = parseInt(key, 10) - 1;
          if (index < question.answerOptions.length) {
            await handleSelectPhrase(question.answerOptions[index].answerText);
          }
        }
      }
      if (key === "Enter" && selectedAnswerOptions.length === question.answer.length && !isCheckBtnClicked) {
        handleCheck();
      }
      if (key === "Enter" && isCheckBtnClicked) {
        handleContinue();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAnswerOptions, isCheckBtnClicked]);

  return (
    <div>
      <TextDisplay text={question.text} />
      <div className='order-phrase-container'>
        <div className='placeholder-box'>
          {selectedAnswerOptions.map((item, index) => (
            <div key={index} className='selected-item'>
              {item}
            </div>
          ))}
        </div>
        <div className='answer-options'>
          {question.answerOptions.map((option: any, index: any) => (
            <button key={index} onClick={() => handleSelectPhrase(option.answerText)} className={`answer-option ${selectedAnswerOptions.includes(option.answerText) ? "selected" : ""}`}>
              {option.answerText}
            </button>
          ))}
        </div>
      </div>
      <Explanation explanation={explanation} isCorrectAnswer={isCorrectAnswer} />
      <Button text={isCheckBtnClicked ? "Continue" : "Check"} onClick={isCheckBtnClicked ? handleContinue : handleCheck} disabled={selectedAnswerOptions.length !== question.answer.length && !isCheckBtnClicked} className={isCheckBtnClicked ? "btn-green" : selectedAnswerOptions.length === question.answer.length ? "btn-blue" : "btn-gray"} />
    </div>
  );
};

export default OrderPhrase;
