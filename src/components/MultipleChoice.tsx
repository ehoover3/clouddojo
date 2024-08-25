import React, { useEffect, useState } from "react";
import { Question } from "../pages/Lesson";
import TextDisplay from "./TextDisplay";
import MultipleChoiceOptions from "./MultipleChoiceOptions";
import CorrectAnswerExplanation from "./CorrectAnswerExplanation";
import Button from "./Button";

interface AnswerOptionsProps {
  question: Question;
  questions: number[];
  setQuestions: React.Dispatch<React.SetStateAction<number[]>>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
  reaskQueue: Set<number>;
  setReaskQueue: React.Dispatch<React.SetStateAction<Set<number>>>;
  onQuizComplete: () => void;
}

const MultipleChoice: React.FC<AnswerOptionsProps> = ({ question, questions: questionQueue, setQuestions, currentQuestion, setCurrentQuestion, setCorrectCount, reaskQueue, setReaskQueue, onQuizComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<{ text: string; img: string }>({ text: "", img: "" });
  const [isCheckBtnClicked, setIsCheckButtonClicked] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    if (selectedAnswer) {
      const isCorrect = question.answer?.[0] === selectedAnswer;
      const selectedOption = question.answerOptions.find((option: any) => option.answerText === selectedAnswer);
      setExplanation({
        text: selectedOption ? selectedOption.explanationText : "No explanation available.",
        img: selectedOption ? selectedOption.explanationImg : "No img available.",
      });
      setIsCorrectAnswer(isCorrect);
      setCorrectCount((prev: any) => (isCorrect ? prev + 1 : prev));
      setReaskQueue((prev) => (isCorrect ? new Set([...prev].filter((index) => index !== questionQueue[currentQuestion])) : new Set(prev.add(questionQueue[currentQuestion]))));
      setIsCheckButtonClicked(true);
    }
  };

  const handleContinue = () => {
    const isLastQuestion = currentQuestion >= questionQueue.length - 1;
    if (!isLastQuestion) {
      setCurrentQuestion((prev) => prev + 1);
      clearSelectedAnswer();
    } else {
      if (reaskQueue.size > 0) {
        const newQueue = [...questionQueue, ...Array.from(reaskQueue)];
        setQuestions(newQueue);
        setReaskQueue(new Set());
        setCurrentQuestion((prev) => prev + 1);
        clearSelectedAnswer();
      } else {
        onQuizComplete();
      }
    }
  };

  const clearSelectedAnswer = () => {
    setExplanation({ text: "", img: "" });
    setIsCheckButtonClicked(false);
    setSelectedAnswer(null);
    setIsCorrectAnswer(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (question && !isCheckBtnClicked) {
        if (key >= "1" && key <= question.answerOptions.length.toString()) {
          const index = parseInt(key, 10) - 1;
          if (index < question.answerOptions.length) handleAnswer(question.answerOptions[index].answerText);
        }
      }
      if (key === "Enter" && selectedAnswer && !isCheckBtnClicked) handleCheck();
      if (key === "Enter" && isCheckBtnClicked) handleContinue();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [question, selectedAnswer, isCheckBtnClicked]);

  return (
    <div>
      <TextDisplay text={question.text} />
      <MultipleChoiceOptions answerOptions={question.answerOptions} selectedAnswer={selectedAnswer} handleAnswer={handleAnswer} isCheckButtonClicked={isCheckBtnClicked} currentQuestion={question} />
      <CorrectAnswerExplanation explanation={explanation} isCorrectAnswer={isCorrectAnswer} />
      <Button text={isCheckBtnClicked ? "Continue" : "Check"} onClick={isCheckBtnClicked ? handleContinue : handleCheck} disabled={!selectedAnswer && !isCheckBtnClicked} className={isCheckBtnClicked ? "btn-green" : selectedAnswer ? "btn-blue" : "btn-gray"} />
    </div>
  );
};

export default MultipleChoice;
