import React, { useState, useEffect } from "react";
import TextDisplay from "./TextDisplay";
import Explanation from "./Explanation";
import Button from "./Button";

interface FillInTheBlankProps {
  quiz: any;
  questionsToAsk: number[];
  currentQuestionIndex: number;
  setQuestionsToAsk: React.Dispatch<React.SetStateAction<number[]>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
  completeQuiz: () => void;
}

const FillInTheBlank: React.FC<FillInTheBlankProps> = ({ quiz, questionsToAsk, currentQuestionIndex, setQuestionsToAsk, setCurrentQuestion, setCorrectCount, completeQuiz }) => {
  const question = quiz[questionsToAsk[currentQuestionIndex]];
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [explanation, setExplanation] = useState<{ text: string; img: string }>({ text: "", img: "" });
  const [isCheckBtnClicked, setIsCheckButtonClicked] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  const handleCheck = () => {
    if (userAnswer.trim()) {
      const isCorrect = question.answer?.[0].toLowerCase() === userAnswer.trim().toLowerCase();
      const explanationText = isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${question.answer?.[0]}.`;
      const explanationImg = isCorrect ? "correct.png" : "incorrect.png";
      setExplanation({ text: explanationText, img: explanationImg });
      setIsCorrectAnswer(isCorrect);
      setCorrectCount((prev) => (isCorrect ? prev + 1 : prev));
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
      clearUserAnswer();
    } else completeQuiz();
  };

  const clearUserAnswer = () => {
    setExplanation({ text: "", img: "" });
    setIsCheckButtonClicked(false);
    setUserAnswer("");
    setIsCorrectAnswer(null);
  };

  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Enter" && userAnswer.trim() && !isCheckBtnClicked) {
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
  }, [userAnswer, isCheckBtnClicked]);

  return (
    <div>
      <TextDisplay text={question.text} />
      <input type='text' value={userAnswer} onChange={handleInputChange} placeholder='Type your answer here...' />
      <Explanation explanation={explanation} isCorrectAnswer={isCorrectAnswer} />
      <Button text={isCheckBtnClicked ? "Continue" : "Check"} onClick={isCheckBtnClicked ? handleContinue : handleCheck} disabled={!userAnswer.trim() && !isCheckBtnClicked} className={isCheckBtnClicked ? "btn-green" : userAnswer.trim() ? "btn-blue" : "btn-gray"} />
    </div>
  );
};

export default FillInTheBlank;
