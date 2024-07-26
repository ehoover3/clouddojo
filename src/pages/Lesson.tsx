import { useLocation } from "react-router-dom";

import AwsCloudPractitionerFoundational from "../data/questions/aws-cloud-practitioner-foundational.json";
import AwsDeveloperAssociate from "../data/questions/aws-developer-associate.json";
import { useState, useEffect } from "react";

export interface Option {
  option: string;
  explanation: string;
}

export interface Question {
  id: number;
  text: string;
  type: string;
  answer: string;
  assignedAnswer: string | null;
  options: Option[];
}

export interface CertificationQuestions {
  parameter: string;
  title: string;
  level: string;
  questions: Question[];
}

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const certParameter = queryParams.get("cert");
  const certTitle = queryParams.get("title");
  const certLevel = queryParams.get("level");

  const [certification, setCertification] = useState<CertificationQuestions | null>(null);

  useEffect(() => {
    if (certParameter === "aws" && certTitle === "Cloud Practitioner" && certLevel === "Foundational") setCertification(AwsCloudPractitionerFoundational);
    if (certParameter === "aws" && certTitle === "Developer" && certLevel === "Associate") setCertification(AwsDeveloperAssociate);
  }, []);

  return (
    <div>
      <h2>
        {certParameter} {certTitle} {certLevel}
      </h2>
      <ul>
        {certification?.questions.map((question, index) => (
          <li key={index}>
            <p>{question.text}</p>
            <ul>
              {question.options.map((option, idx) => (
                <li key={idx}>
                  {option.option}: {option.explanation}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lesson;
