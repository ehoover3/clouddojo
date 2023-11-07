import React from "react";
import { render } from "@testing-library/react";
import CompleteView from "./CompleteView";

test('renders "Quiz Completed" heading', () => {
  const { getByText } = render(<CompleteView userAnswers={[]} returnToPathView={() => {}} />);
  const heading = getByText("Quiz Completed");
  expect(heading).toBeInTheDocument();
});
