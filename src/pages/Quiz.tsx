import { useState } from "react";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { useEffect } from "react";
import "./Quiz.css";
import { Link, useNavigate } from "react-router-dom";

export default function Quiz({ quiz, path_url }: any) {
  const [view, setView] = useState<"PathView" | "QuizView" | "CompleteView">("QuizView");
  const [isFeedbackShowing, setIsFeedbackShowing] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<any>(quiz);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const [userAnswersLog, setUserAnswersLog] = useState<[]>([]);

  const handleSelectedAnswer = (selectedOption: { answer: string; reason: string }) => {
    const isCorrect = selectedOption.answer === questions[questionIndex].correctAnswer;

    if (!isCorrect) setQuestions((prevIncorrectlyAnswered: any) => [...prevIncorrectlyAnswered, questions[questionIndex]]);
    setUserAnswersLog((prevAnswers): any => [...prevAnswers, { answer: selectedOption, isCorrect: isCorrect }]);
    setIsFeedbackShowing(true);
  };

  const handleButtonClick = (optionIndex: number) => {
    if (!isFeedbackShowing) handleSelectedAnswer(questions[questionIndex].options[optionIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4" && !isFeedbackShowing) {
        const optionIndex = parseInt(event.key) - 1;
        setSelectedAnswer(optionIndex);
        handleButtonClick(optionIndex);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isFeedbackShowing, setSelectedAnswer]);

  const feedbackData = {
    questionIndex,
    questions,
    userAnswersLog,
    setIsFeedbackShowing,
    setSelectedAnswer,
    setQuestionIndex,
    setView,
  };

  return (
    <div className='App'>
      {view === "QuizView" && (
        <>
          <div className='question-view-container'>
            <h2 className='question-number'>Question {questionIndex + 1}</h2>
            <p className='question-text'>{questions[questionIndex].questionText}</p>

            {questions[questionIndex].options.map((option: any, index: any) => (
              <button
                key={index}
                onClick={() => {
                  handleButtonClick(index);
                  setSelectedAnswer(index);
                }}
                className={`option-button ${isFeedbackShowing ? "disabled" : ""} ${selectedAnswer === index ? "active" : ""}`}>
                <span style={{ fontWeight: "bold" }}>{index + 1}</span> &nbsp; {option.answer}
              </button>
            ))}
          </div>
          {isFeedbackShowing && <Feedback {...feedbackData} />}
        </>
      )}

      {view === "CompleteView" && <CompleteView userAnswers={userAnswersLog} path_url={path_url} />}
    </div>
  );
}

function Feedback({ userAnswersLog, questionIndex, questions, setSelectedAnswer, setIsFeedbackShowing, setQuestionIndex, setView }: any) {
  const nextQuestionOrCompleteQuiz = () => {
    setIsFeedbackShowing(false);
    questionIndex < questions.length - 1 ? setQuestionIndex(questionIndex + 1) : setView("CompleteView");
  };

  let isCorrect = userAnswersLog[userAnswersLog.length - 1].isCorrect;
  let backgroundColor = isCorrect ? "#d7ffb8" : "#fec1c2";
  let color = isCorrect ? "#58cc02" : "#ff4b4b";
  return (
    <div style={{ width: "100vw" }}>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "175px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: backgroundColor,
          alignItems: "center",
        }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "75px", height: "75px", paddingLeft: "40px", paddingRight: "10px" }}>
            {isCorrect ? <BsCheckCircleFill size={"75px"} color={color} /> : <BsXCircleFill size='75px' color='#ff4b4b' />}
          </div>

          <div>
            <div
              style={{
                textAlign: "left",
                fontWeight: "bold",
                color: color,
                fontSize: "16px",
              }}>
              Correct Answer:
            </div>

            <div
              style={{
                textAlign: "left",
                fontWeight: "bold",
              }}>
              {questions[questionIndex].correctAnswer}
            </div>
            <div style={{ textAlign: "left" }}>{userAnswersLog[userAnswersLog.length - 1].answer.reason}</div>
          </div>
        </div>

        <button
          onClick={() => {
            nextQuestionOrCompleteQuiz();
            setSelectedAnswer(null);
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              nextQuestionOrCompleteQuiz();
              setSelectedAnswer(null);
            }
          }}
          tabIndex={0}
          role='button'
          autoFocus
          style={{ height: "50px", minWidth: "150px", marginRight: "40px" }}>
          Next Question
        </button>
      </div>
    </div>
  );
}

function CompleteView({ userAnswers, path_url }: any) {
  const navigate = useNavigate();
  const returnToMenu = () => {
    navigate(path_url);
  };

  return (
    <div>
      <h1>Quiz Completed</h1>
      <ul>
        {userAnswers.map((answer: any, index: number) => (
          <li key={index}>
            Question {index + 1}: {answer.answer.answer} ({answer.isCorrect ? `Correct! ${answer.answer.reason}` : "Incorrect"})
          </li>
        ))}
      </ul>

      {/* <Link to={path_url}> */}
      <button tabIndex={0} role='button' autoFocus onClick={returnToMenu}>
        Return to Menu
      </button>
      {/* </Link> */}
    </div>
  );
}
