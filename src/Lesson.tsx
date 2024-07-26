import { useLocation } from "react-router-dom";
import certifications from "./certifications.json";

const Lesson = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const certParameter = queryParams.get("cert");
  const certTitle = queryParams.get("title");
  const certLevel = queryParams.get("level");

  const certificationPlatform = certifications.find((c) => certParameter === c.parameter);
  const certification = certificationPlatform?.certifications.find((c) => c.title === certTitle && c.level === certLevel);

  return (
    <div>
      <h2>
        {certTitle} {certLevel}
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
