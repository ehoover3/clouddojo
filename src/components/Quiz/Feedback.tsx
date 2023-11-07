import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

interface FeedbackProps {
  userAnswersLog: Array<{ isCorrect: boolean; answer: { reason: string } }>;
  questionIndex: number;
  questions: Array<{ correctAnswer: string }>;
  setSelectedAnswer: any;
  setIsFeedbackShowing: any;
  setQuestionIndex: any;
  setView: any;
}

function Feedback({ userAnswersLog, questionIndex, questions, setSelectedAnswer, setIsFeedbackShowing, setQuestionIndex, setView }: FeedbackProps) {
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

export default Feedback;
