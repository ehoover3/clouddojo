export type QuestionType = {
  domain: string;
  questionText: string;
  options: { answer: string; reason: string }[];
  hint: string;
  correctAnswer: string;
};
