import React, { useEffect, useState } from "react";
import { Question } from "../..";
import CheckContinueButton from "./CheckContinueButton";
import AnswerOption from "./AnswerOption";
import Explanation from "./Explanation";

interface AnswerOptionsProps {
  currentQuestion: Question;
  certification: Question[];
  questionQueue: number[];
  setQuestionQueue: React.Dispatch<React.SetStateAction<number[]>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setAnsweredCorrectlyCount: React.Dispatch<React.SetStateAction<number>>;
  incorrectQuestions: Set<number>;
  setIncorrectQuestions: React.Dispatch<React.SetStateAction<Set<number>>>;
  onQuizComplete: () => void;
}

const MultipleChoice: React.FC<AnswerOptionsProps> = ({ currentQuestion, certification, questionQueue, setQuestionQueue, currentQuestionIndex, setCurrentQuestionIndex, setAnsweredCorrectlyCount, incorrectQuestions, setIncorrectQuestions, onQuizComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<{ text: string; img: string }>({ text: "", img: "" });
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (currentQuestion && !isCheckButtonClicked) {
        if (key >= "1" && key <= currentQuestion.answerOptions.length.toString()) {
          const index = parseInt(key, 10) - 1;
          if (index < currentQuestion.answerOptions.length) handleAnswer(currentQuestion.answerOptions[index].answerText);
        }
      }
      if (key === "Enter" && isAnswerSelected && !isCheckButtonClicked) handleCheck();
      if (key === "Enter" && isCheckButtonClicked) handleContinue();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestion, isAnswerSelected, isCheckButtonClicked]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswerSelected(true);
  };

  const handleCheck = () => {
    if (selectedAnswer) {
      const isCorrect = currentQuestion.answer?.[0] === selectedAnswer;
      const selectedOption = currentQuestion.answerOptions.find((option: any) => option.answerText === selectedAnswer);

      setExplanation({
        text: selectedOption ? selectedOption.explanationText : "No explanation available.",
        img: selectedOption ? selectedOption.explanationImg : "No img available.",
      });

      setIsCorrectAnswer(isCorrect);
      setAnsweredCorrectlyCount((prev: any) => (isCorrect ? prev + 1 : prev));
      setIncorrectQuestions((prev) => (isCorrect ? new Set([...prev].filter((index) => index !== questionQueue[currentQuestionIndex])) : new Set(prev.add(questionQueue[currentQuestionIndex]))));
      setIsCheckButtonClicked(true);
    }
  };

  const handleContinue = () => {
    const isLastQuestion = currentQuestionIndex >= questionQueue.length - 1;
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      clearSelectedAnswer();
    } else {
      if (incorrectQuestions.size > 0) {
        const newQueue = [...questionQueue, ...Array.from(incorrectQuestions)];
        setQuestionQueue(newQueue);
        setIncorrectQuestions(new Set());
        setCurrentQuestionIndex((prev) => prev + 1);
        clearSelectedAnswer();
      } else {
        onQuizComplete();
      }
    }
  };

  const clearSelectedAnswer = () => {
    setExplanation({ text: "", img: "" });
    setIsCheckButtonClicked(false);
    setIsAnswerSelected(false);
    setSelectedAnswer(null);
    setIsCorrectAnswer(null);
  };

  return (
    <div>
      <p className='question-text'>{currentQuestion.text}</p>
      <div className='answers'>
        {currentQuestion.answerOptions.map((answerOption: any, index: any) => (
          <AnswerOption key={index} answerOption={answerOption} selectedAnswer={selectedAnswer} handleAnswer={handleAnswer} isCheckButtonClicked={isCheckButtonClicked} currentQuestion={currentQuestion} />
        ))}
      </div>
      <Explanation explanation={explanation} isCorrectAnswer={isCorrectAnswer} />
      <CheckContinueButton isAnswerSelected={isAnswerSelected} isCheckButtonClicked={isCheckButtonClicked} handleCheck={handleCheck} handleContinue={handleContinue} />
    </div>
  );
};

export default MultipleChoice;
