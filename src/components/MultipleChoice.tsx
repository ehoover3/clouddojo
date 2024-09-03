import React, { useEffect, useState } from "react";
import TextDisplay from "./TextDisplay";
import MultipleChoiceOptions from "./MultipleChoiceOptions";
import Explanation from "./Explanation";
import Button from "./Button";
import LineGap from "./LineGap";

interface MultipleChoiceProps {
  quiz: any;
  questionsToAsk: number[];
  currentQuestionIndex: number;
  setQuestionsToAsk: React.Dispatch<React.SetStateAction<number[]>>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
  completeQuiz: () => void;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ quiz, questionsToAsk, currentQuestionIndex, setQuestionsToAsk, setCurrentQuestion, setCorrectCount, completeQuiz }) => {
  const question = quiz[questionsToAsk[currentQuestionIndex]];
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
    } else completeQuiz();
  };

  const clearSelectedAnswer = () => {
    setExplanation({ text: "", img: "" });
    setIsCheckButtonClicked(false);
    setSelectedAnswer(null);
    setIsCorrectAnswer(null);
  };

  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      const key = event.key;
      if (question && !isCheckBtnClicked) {
        if (key >= "1" && key <= question.answerOptions.length.toString()) {
          const index = parseInt(key, 10) - 1;
          if (index < question.answerOptions.length) await handleAnswer(question.answerOptions[index].answerText);
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
      <TextDisplay text={question.text} fontSize='25px' fontWeight='700' />
      <LineGap margin={"16px"} />
      <MultipleChoiceOptions answerOptions={question.answerOptions} selectedAnswer={selectedAnswer} handleAnswer={handleAnswer} isCheckButtonClicked={isCheckBtnClicked} currentQuestion={question} />
      <Explanation explanation={explanation} isCorrectAnswer={isCorrectAnswer} />
      <Button text={isCheckBtnClicked ? "Continue" : "Check"} onClick={isCheckBtnClicked ? handleContinue : handleCheck} disabled={!selectedAnswer && !isCheckBtnClicked} className={isCheckBtnClicked ? "btn-green" : selectedAnswer ? "btn-blue" : "btn-gray"} width='90vw' position='fixed' bottom='16px' />
    </div>
  );
};

export default MultipleChoice;
