// counter.ts
import { useDispatch, useSelector } from "react-redux";
import { increment, setUsername, completeQuiz } from "./redux/actions";

export default function Counter() {
  const dispatch = useDispatch();
  const { count, username, completedQuizzes } = useSelector((state: any) => state.counter);

  const handleCompleteQuiz = (quizName: string) => {
    dispatch(completeQuiz(quizName));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Username: {username}</p>
      <p>
        Quizzes Completed:
        {completedQuizzes.map((quizName: any) => (
          <div key={quizName}>
            {quizName.url} {quizName.isComplete ? "true" : "false"}
          </div>
        ))}
      </p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(setUsername("newUsername"))}>Set Username</button>
      <button onClick={() => handleCompleteQuiz("Quiz1")}>Complete Quiz 1</button>
      <button onClick={() => handleCompleteQuiz("Quiz2")}>Complete Quiz 2</button>
      <button onClick={() => handleCompleteQuiz("Quiz3")}>Complete Quiz 3</button>
    </div>
  );
}
