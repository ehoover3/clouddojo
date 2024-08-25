import React, { useEffect, useState } from "react";
import TextDisplay from "./TextDisplay";
import MultipleChoiceOptions from "./MultipleChoiceOptions";
import CorrectAnswerExplanation from "./CorrectAnswerExplanation";
import Button from "./Button";

interface MultipleChoiceProps {
  quiz: any;
  questions: number[];
  setQuestions: React.Dispatch<React.SetStateAction<number[]>>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
  completeQuiz: () => void;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ quiz, questions, currentQuestion, setQuestions, setCurrentQuestion, setCorrectCount, completeQuiz }) => {
  const question = quiz[questions[currentQuestion]];
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
      if (!isCorrect) {
        setQuestions((prev) => [...prev, questions[currentQuestion]]);
      }
      setIsCheckButtonClicked(true);
    }
  };

  const handleContinue = () => {
    const isLastQuestion = currentQuestion >= questions.length - 1;
    if (!isLastQuestion) {
      setCurrentQuestion((prev) => prev + 1);
      clearSelectedAnswer();
    } else completeQuiz();
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
