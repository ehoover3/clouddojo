import "../Menu/Menu.css";

import { QuestionType } from "../../types/Question";
import QuizModule, { QuizModuleType } from "./QuizModule";

import { useState } from "react";

import { AWS_CloudPractitioner_Path } from "../../data/learningPaths/AWS_CloudPractitioner";
import PathTitle from "./PathTitle";

function PathView({ startQuiz }: { startQuiz: (questions: QuestionType[]) => void }) {
  const [modules, setModules] = useState<QuizModuleType[]>(AWS_CloudPractitioner_Path);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>AWS Cloud Practitioner</h1>

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
