import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Feedback from "./Feedback"; // Import the Feedback component

describe("Feedback Component", () => {
  const mockProps = {
    userAnswersLog: [
      {
        isCorrect: true,
        answer: { reason: "Correct answer reason" },
      },
    ],
    questionIndex: 0,
    questions: [{ correctAnswer: "Correct Answer 1" }, { correctAnswer: "Correct Answer 2" }],
    setSelectedAnswer: jest.fn(),
    setIsFeedbackShowing: jest.fn(),
    setQuestionIndex: jest.fn(),
    setView: jest.fn(),
  };

  it("renders without errors", () => {
    render(<Feedback {...mockProps} />);
  });

  it("displays correct feedback for a correct answer", () => {
    const { getByText } = render(<Feedback {...mockProps} />);

    expect(getByText("Correct Answer:")).toBeInTheDocument();
    expect(getByText("Correct Answer 1")).toBeInTheDocument();
    expect(getByText("Correct answer reason")).toBeInTheDocument();
  });
});
