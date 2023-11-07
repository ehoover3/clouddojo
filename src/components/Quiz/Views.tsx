import { useState } from "react";

// types
import { QuestionType } from "../../types/Question";
import { UserAnswerType } from "../../types/UserAnswer";

// components
import PathView from "../LearningPath/PathView";
import QuizView from "./QuizView";
import Feedback from "./Feedback";
import CompleteView from "./CompleteView";

function Views() {
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

export default Views;
