import { useState } from "react";
import "../components/Menu.css";
import QuizNode from "../components/LearningPath/QuizNode";
import TitleNode from "../components/LearningPath/TitleNode";
import { useSelector } from "react-redux";

export default function CertPath({ pathTitle }: any) {
  const { completedQuizzes } = useSelector((state: any) => state.counter);
  const [modules, setModules] = useState<any[]>(completedQuizzes);

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
