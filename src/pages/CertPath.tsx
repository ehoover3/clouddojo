import { useState } from "react";

// types
import { QuestionType } from "../types/Question";
import { UserAnswerType } from "../types/UserAnswer";

// components
import PathView from "../components/LearningPath/PathView";
import QuizView from "../components/Quiz/QuizView";
import Feedback from "../components/Quiz/Feedback";
import CompleteView from "../components/Quiz/CompleteView";

export default function CertPath({ certification }: any) {
  const [view, setView] = useState<"PathView" | "QuizView" | "CompleteView">("PathView");

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [userAnswersLog, setUserAnswersLog] = useState<UserAnswerType[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isFeedbackShowing, setIsFeedbackShowing] = useState<boolean>(false);

  const handleSelectedAnswer = (selectedOption: { answer: string; reason: string }) => {
    const isCorrect = selectedOption.answer === questions[questionIndex].correctAnswer;

    if (!isCorrect) setQuestions((prevIncorrectlyAnswered) => [...prevIncorrectlyAnswered, questions[questionIndex]]);
    setUserAnswersLog((prevAnswers) => [...prevAnswers, { answer: selectedOption, isCorrect: isCorrect }]);
    setIsFeedbackShowing(true);
  };

  const startQuiz = (questions: QuestionType[]) => {
    setQuestionIndex(0);
    setQuestions(questions);
    setUserAnswersLog([]);
    setView(questions.length > 0 ? "QuizView" : "CompleteView");
  };

  const QuizViewData = {
    isFeedbackShowing,
    questionIndex,
    selectedAnswer,
    questions,
    handleSelectedAnswer,
    setSelectedAnswer,
  };

  const feedbackData = {
    questionIndex,
    questions,
    userAnswersLog,
    setIsFeedbackShowing,
    setSelectedAnswer,
    setQuestionIndex,
    setView,
  };

  return (
    <div className='App'>
      {view === "PathView" && <PathView startQuiz={startQuiz} />}

      {view === "QuizView" && (
        <>
          <h1>Quiz</h1>
          <QuizView {...QuizViewData} />
          {isFeedbackShowing && <Feedback {...feedbackData} />}
        </>
      )}

      {view === "CompleteView" && <CompleteView userAnswers={userAnswersLog} returnToPathView={() => setView("PathView")} />}
    </div>
  );
}

//
//
//
// import "../Menu/Menu.css";

// import { QuestionType } from "../../types/Question";
// import QuizModule, { QuizModuleType } from "./QuizModule";

// import { useState } from "react";

// import { AWS_CloudPractitioner_Path } from "../../data/learningPaths/AWS_CloudPractitioner";
// import PathTitle from "./PathTitle";

// function PathView({ startQuiz }: { startQuiz: (questions: QuestionType[]) => void }) {
//   const [modules, setModules] = useState<QuizModuleType[]>(AWS_CloudPractitioner_Path);

//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>AWS Cloud Practitioner</h1>

//       <PathTitle topText='AWS Cloud' bottomText='Concepts' y={710} />
//       <PathTitle topText='Security and' bottomText='Compliance' y={2480} />
//       <PathTitle topText='Cloud Technology' bottomText='and Services' y={4250} />

//       {modules.map((module, index) => (
//         <QuizModule
//           key={index}
//           isCompleted={module.isCompleted}
//           position={module.position}
//           quiz={module.quiz}
//           img={module.img}
//           text={module.text}
//           startQuiz={startQuiz}
//         />
//       ))}
//     </div>
//   );
// }

// export default PathView;
