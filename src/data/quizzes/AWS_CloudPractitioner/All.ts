import { QuestionType } from "../../../types/Question";
export const dummyQuestions: QuestionType[] = [
  {
    domain: "",
    questionText: "What is the capital of France?",
    options: [
      { answer: "Berlin", reason: "Berlin is in Germany" },
      { answer: "Madrid", reason: "Madrid is in Spain" },
      { answer: "Paris", reason: "Paris is in France" },
      { answer: "London", reason: "London is in England" },
    ],
    hint: "",
    correctAnswer: "Paris",
  },
  {
    domain: "",
    questionText: 'Which planet is known as the "Red Planet"?',
    options: [
      { answer: "Jupiter", reason: "Jupiter is pale yellow or cream" },
      { answer: "Saturn", reason: "Saturn is pale yellow or light golden" },
      { answer: "Mars", reason: "Mars is reddish-brown" },
      { answer: "Venus", reason: "Venus is yellowish-white or a creamy color" },
    ],
    hint: "",
    correctAnswer: "Mars",
  },
  {
    domain: "",
    questionText: "What is the largest mammal in the world?",
    options: [
      {
        answer: "Elephant",
        reason: "Elephants can weight between 4,500 to 6,800 kilograms",
      },
      {
        answer: "Blue Whale",
        reason: "Blue Whales can weigh between 100,000 to 200,000 kilograms",
      },
      {
        answer: "Giraffe",
        reason: "Giraffes can weigh between 800 to 1,400 kilograms",
      },
      {
        answer: "Hippopotamus",
        reason: "Hippos can weigh between 1,500 to 3,200 kilograms",
      },
    ],
    hint: "",
    correctAnswer: "Blue Whale",
  },
];
