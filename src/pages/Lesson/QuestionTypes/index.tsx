import FillInTheBlank from "./FillInTheBlank";
import MultipleChoice from "./MultipleChoice";
import Matching from "./Matching";

const QuestionType = (props: any) => {
  const { currentQuestion } = props;

  switch (currentQuestion.type) {
    case "multiple-choice":
      return <MultipleChoice {...props} />;
    case "matching":
      return <Matching {...props} />;
    case "fill-in-the-blank":
      return <FillInTheBlank {...props} />;
    default:
      return <div>Unsupported question type: {currentQuestion.type}</div>;
  }
};

export default QuestionType;
