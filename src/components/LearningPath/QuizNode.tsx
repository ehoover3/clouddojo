import "../Menu/Menu.css";
import { useState } from "react";
import { Link } from "react-router-dom";

type QuestionType = {
  domain: string;
  questionText: string;
  options: { answer: string; reason: string }[];
  hint: string;
  correctAnswer: string;
};

type UserAnswerType = {
  answer: { answer: string; reason: string };
  isCorrect: boolean;
};

// const handleSelectedAnswer = (selectedOption: { answer: string; reason: string }) => {
//   const isCorrect = selectedOption.answer === questions[questionIndex].correctAnswer;

//   if (!isCorrect) setQuestions((prevIncorrectlyAnswered) => [...prevIncorrectlyAnswered, questions[questionIndex]]);
//   setUserAnswersLog((prevAnswers) => [...prevAnswers, { answer: selectedOption, isCorrect: isCorrect }]);
//   setIsFeedbackShowing(true);
// };

function QuizNode({ module }: any) {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [userAnswersLog, setUserAnswersLog] = useState<UserAnswerType[]>([]);
  const [view, setView] = useState<"PathView" | "QuizView" | "CompleteView">("PathView");

  // setQuestionIndex(0);

  const { url, img, position, isCompleted, quiz, text } = module;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxShadowStyle = {
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.3s",
  };

  return (
    <Link to={url}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          left: position,
          paddingBottom: "32px",
        }}>
        <img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={img}
          alt='Question'
          style={{
            width: "120px",
            cursor: "pointer",
            ...boxShadowStyle,
            outline: isCompleted ? "5px solid gold" : "",
          }}
        />

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "270px", textAlign: "center", cursor: "pointer", marginBottom: "50px" }}>
          {text}
        </div>
      </div>
    </Link>
  );
}

export default QuizNode;
