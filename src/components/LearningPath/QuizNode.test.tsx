import { render, fireEvent } from "@testing-library/react";
import QuizNode from "./QuizNode";

// Mock the startQuiz function
const mockStartQuiz = jest.fn();

const defaultProps = {
  img: "quiz-image.png",
  position: "0px",
  isCompleted: false,
  quiz: "quiz-1",
  text: "Sample Quiz",
  startQuiz: mockStartQuiz,
};

describe("QuizModule Component", () => {
  it("renders the component with default props", () => {
    const { getByText } = render(<QuizNode {...defaultProps} />);

    // Check if the component renders with the correct text
    expect(getByText("Sample Quiz")).toBeInTheDocument();
  });

  it("handles mouse enter and leave events", () => {
    const { getByAltText } = render(<QuizNode {...defaultProps} />);

    const quizImage = getByAltText("Question");

    // Simulate mouse enter event
    fireEvent.mouseEnter(quizImage);
    expect(quizImage).toHaveStyle("transform: scale(1.05)");

    // Simulate mouse leave event
    fireEvent.mouseLeave(quizImage);
    expect(quizImage).toHaveStyle("transform: scale(1)");
  });

  it("triggers startQuiz when clicking on the image and text", () => {
    const { getByAltText, getByText } = render(<QuizNode {...defaultProps} />);

    const quizImage = getByAltText("Question");
    const quizText = getByText("Sample Quiz");

    // Simulate click on image
    fireEvent.click(quizImage);
    expect(mockStartQuiz).toHaveBeenCalledWith("quiz-1");

    // Simulate click on text
    fireEvent.click(quizText);
    expect(mockStartQuiz).toHaveBeenCalledWith("quiz-1");
  });

  it('applies the "gold" outline when isCompleted is true', () => {
    const { getByAltText } = render(<QuizNode {...defaultProps} isCompleted={true} />);

    const quizImage = getByAltText("Question");

    // Check if the "gold" outline is applied
    expect(quizImage).toHaveStyle("outline: 5px solid gold");
  });
});
