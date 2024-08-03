import { shuffleArray } from "../../utils/shuffleArray";
import { Question } from "./index";

export const shuffleAnswerOptions = (questions: Question[]): Question[] => {
  return questions.map((question) => ({
    ...question,
    answerOptions: Array.isArray(question.answerOptions) ? shuffleArray([...question.answerOptions]) : question.answerOptions,
  }));
};
