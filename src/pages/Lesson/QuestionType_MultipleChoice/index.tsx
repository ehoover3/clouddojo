import React, { useEffect, useState } from "react";
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

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const QuestionType_MultipleChoice: React.FC<AnswerOptionsProps> = ({ currentQuestion, certification, questionQueue, setQuestionQueue, currentQuestionIndex, setCurrentQuestionIndex, correctAnswers, setCorrectAnswers, incorrectQuestions, setIncorrectQuestions, onQuizComplete }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC_URL || "";
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [explanationText, setExplanationText] = useState<string | null>(null);
  const [explanationImg, setExplanationImg] = useState<string>("");
  const [showNext, setShowNext] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (currentQuestion && !showNext) {
        if (key >= "1" && key <= "4") {
          const index = parseInt(key, 10) - 1;
          if (index < currentQuestion.answerOptions.length) {
            handleAnswer(currentQuestion.answerOptions[index].answerText);
          }
        }
      }
      if (key === "Enter" && isAnswerSelected && !showNext) {
        handleSubmit();
      }
      if (key === "Enter" && showNext) {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestion, showNext, isAnswerSelected]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswerSelected(true);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      const isCorrect = currentQuestion.answer === selectedAnswer;
      const selectedOption = currentQuestion.answerOptions.find((option) => option.answerText === selectedAnswer);
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
    if (currentQuestionIndex < questionQueue.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      clearSelectedAnswer();
      shuffleAnswerOptions();
    } else {
      if (incorrectQuestions.size > 0) {
        const newQueue = [...questionQueue, ...Array.from(incorrectQuestions)];
        setQuestionQueue(newQueue);
        setIncorrectQuestions(new Set());
        setCurrentQuestionIndex(questionQueue.length);
        clearSelectedAnswer();
        shuffleAnswerOptions();
      } else {
        onQuizComplete();
      }
    }
  };

  const clearSelectedAnswer = () => {
    setExplanationText(null);
    setShowNext(false);
    setIsAnswerSelected(false);
    setSelectedAnswer(null);
  };

  const shuffleAnswerOptions = () => {
    const currentQuestion = certification[questionQueue[currentQuestionIndex]];
    currentQuestion.answerOptions = shuffleArray(currentQuestion.answerOptions);
  };

  return (
    <div>
      <p className='question-text'>{currentQuestion.text}</p>
      <div className='answers'>
        {currentQuestion.answerOptions.map((answerOption, index) => (
          <div
            key={index}
            className='answer'
            style={{
              backgroundColor: selectedAnswer === answerOption.answerText ? "lightblue" : currentQuestion.assignedAnswer === answerOption.answerText ? "grey" : "white",
              cursor: showNext ? "not-allowed" : "pointer",
            }}
            onClick={() => !showNext && handleAnswer(answerOption.answerText)}>
            {answerOption.answerImg ? <img src={`${publicUrl}/images/${answerOption.answerImg}`} alt='Explanation Image' style={{ width: "100%" }} /> : ""}
            {answerOption.answerText}
          </div>
        ))}
      </div>
      {explanationText ? (
        <div>
          <p className='explanation'>{explanationText}</p>
          <img src={`${publicUrl}/images/${explanationImg}`} alt='Explanation Image' style={{ width: "25vw" }} />
        </div>
      ) : null}
      <button onClick={showNext ? handleNext : handleSubmit} disabled={!isAnswerSelected}>
        {showNext ? "Next" : "Submit"}
      </button>
    </div>
  );
};

export default QuestionType_MultipleChoice;
