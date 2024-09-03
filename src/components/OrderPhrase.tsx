import React, { useState, useEffect } from "react";
import TextDisplay from "./TextDisplay";
import Button from "./Button";
import Explanation from "./Explanation";
import LineGap from "./LineGap";

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
  const [explanation, setExplanation] = useState<{ text: string; img: string }>({ text: question.explanationText, img: "" });
  const [isCheckBtnClicked, setIsCheckButtonClicked] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const handleSelectPhrase = (answerText: string, source: "selected" | "options") => {
    if (source === "selected") {
      // Allow unselecting from the selected list
      setSelectedAnswerOptions(selectedAnswerOptions.filter((item) => item !== answerText));
    } else if (source === "options" && !selectedAnswerOptions.includes(answerText)) {
      // Only allow selecting if it hasn't been selected yet
      setSelectedAnswerOptions([...selectedAnswerOptions, answerText]);
    }
  };

  const handleCheck = () => {
    if (selectedAnswerOptions.length !== 0) {
      const isCorrect = JSON.stringify(selectedAnswerOptions) === JSON.stringify(question.answer);
      setIsCorrectAnswer(isCorrect);
      setCorrectCount((prev: any) => (isCorrect ? prev + 1 : prev));
      if (!isCorrect) setQuestionsToAsk((prev) => [...prev, questionsToAsk[currentQuestionIndex]]);
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
    setSelectedAnswerOptions([]);
    setIsCheckButtonClicked(false);
    setIsCorrectAnswer(null);
  };

  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      const key = event.key;
      if (!isCheckBtnClicked) {
        if (key >= "1" && key <= question.answerOptions.length.toString()) {
          const index = parseInt(key, 10) - 1;
          if (index < question.answerOptions.length) await handleSelectPhrase(question.answerOptions[index].answerText, "options");
        }
      }
      if (key === "Enter" && selectedAnswerOptions.length === question.answer.length && !isCheckBtnClicked) handleCheck();
      if (key === "Enter" && isCheckBtnClicked) handleContinue();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAnswerOptions, isCheckBtnClicked]);

  return (
    <div>
      <TextDisplay text={question.text} fontSize='25px' fontWeight='700' />
      <LineGap margin={"16px"} />
      <div className='order-phrase-container'>
        <div className='placeholder-box' style={{ outline: "1px solid black", minHeight: "44px" }}>
          {selectedAnswerOptions.map((item, index) => (
            <button key={index} className='selected-item' onClick={() => handleSelectPhrase(item, "selected")}>
              {item}
            </button>
          ))}
        </div>
        <div className='answer-options'>
          {question.answerOptions.map((option: any, index: any) => (
            <button key={index} onClick={() => handleSelectPhrase(option.answerText, "options")} className={`answer-option ${selectedAnswerOptions.includes(option.answerText) ? "disabled" : ""}`} disabled={selectedAnswerOptions.includes(option.answerText)}>
              {option.answerText}
            </button>
          ))}
        </div>
      </div>
      {isCheckBtnClicked && <Explanation explanation={explanation} isCorrectAnswer={isCorrectAnswer} />}
      <Button text={isCheckBtnClicked ? "Continue" : "Check"} onClick={isCheckBtnClicked ? handleContinue : handleCheck} disabled={selectedAnswerOptions.length === 0 && !isCheckBtnClicked} className={isCheckBtnClicked ? "btn-green" : selectedAnswerOptions.length !== 0 ? "btn-blue" : "btn-gray"} width='90vw' position='fixed' bottom='16px' />
    </div>
  );
};

export default OrderPhrase;
