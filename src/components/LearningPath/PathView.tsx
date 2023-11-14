import "../Menu/Menu.css";

import QuizModule, { QuizModuleType } from "./QuizModule";

import { useState } from "react";

import { AWS_CloudPractitioner_Path } from "../../data/learningPaths/AWS_CloudPractitioner";
import PathTitle from "./PathTitle";

type QuestionType = {
  domain: string;
  questionText: string;
  options: { answer: string; reason: string }[];
  hint: string;
  correctAnswer: string;
};

function PathView({ pathTitle, startQuiz }: any) {
  const [modules, setModules] = useState<QuizModuleType[]>(AWS_CloudPractitioner_Path);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{pathTitle}</h1>

      <PathTitle topText='AWS Cloud' bottomText='Concepts' y={710} />
      <PathTitle topText='Security and' bottomText='Compliance' y={2480} />
      <PathTitle topText='Cloud Technology' bottomText='and Services' y={4250} />

      {modules.map((module, index) => (
        <QuizModule
          key={index}
          isCompleted={module.isCompleted}
          position={module.position}
          quiz={module.quiz}
          img={module.img}
          text={module.text}
          startQuiz={startQuiz}
        />
      ))}
    </div>
  );
}

export default PathView;
