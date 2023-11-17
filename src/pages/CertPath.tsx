import { useState } from "react";
import "../components/Menu/Menu.css";
import QuizNode from "../components/LearningPath/QuizNode";
import TitleNode from "../components/LearningPath/TitleNode";
import { useDispatch, useSelector } from "react-redux";
import { completeQuiz } from "../redux/actions";

export default function CertPath({ pathTitle }: any) {
  const { completedQuizzes } = useSelector((state: any) => state.counter);
  const [modules, setModules] = useState<any[]>(completedQuizzes);
  const dispatch = useDispatch();
  const handleCompleteQuiz = (quizName: string) => {
    dispatch(completeQuiz(quizName));
  };
  <button onClick={() => handleCompleteQuiz("Quiz1")}>Complete Quiz 1</button>;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{pathTitle}</h1>

      <TitleNode topText='AWS Cloud' bottomText='Concepts' y={710} />
      <TitleNode topText='Security and' bottomText='Compliance' y={2480} />
      <TitleNode topText='Cloud Technology' bottomText='and Services' y={4250} />

      {modules.map((module, index) => (
        <QuizNode key={index} module={module} />
      ))}
    </div>
  );
}
