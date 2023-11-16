import { useState } from "react";
import "../components/Menu/Menu.css";

// data
import { path_aws_cloudpractitioner } from "../data/Paths";

// components
import QuizNode from "../components/LearningPath/QuizNode";
import TitleNode from "../components/LearningPath/TitleNode";

export default function CertPath({ pathTitle, cert }: any) {
  const [modules, setModules] = useState<any[]>(path_aws_cloudpractitioner);

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
