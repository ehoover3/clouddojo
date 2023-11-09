interface CompleteViewProps {
  userAnswers: object[];
  returnToPathView: () => void;
}

function CompleteView({ userAnswers, returnToPathView }: CompleteViewProps) {
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
      <button
        onClick={returnToPathView}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            returnToPathView();
          }
        }}
        tabIndex={0}
        role='button'
        autoFocus>
        Return to Menu
      </button>
    </div>
  );
}

export default CompleteView;
