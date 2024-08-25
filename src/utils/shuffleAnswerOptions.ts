import { shuffleArray } from "./shuffleArray";
import { Question } from "../pages/Lesson";

export const shuffleAnswerOptions = (questions: Question[]): Question[] => {
  return questions.map((question) => ({
    ...question,
    answerOptions: Array.isArray(question.answerOptions) ? shuffleArray([...question.answerOptions]) : question.answerOptions,
  }));
};
