import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MenuCard from "./MenuCard";

describe("MenuCard Component", () => {
  const mockStartQuiz = jest.fn();
  const sampleProps = {
    questions: [],
    subtitle: "Start Quiz",
    startQuiz: mockStartQuiz,
  };

  it("should render MenuCard with the provided subtitle", () => {
    const { getByText } = render(<MenuCard {...sampleProps} />);
    expect(getByText("Start Quiz")).toBeInTheDocument();
  });

  it("should call the startQuiz function when the button is clicked", () => {
    const { getByText } = render(<MenuCard {...sampleProps} />);
    const startQuizButton = getByText("Start Quiz");
    fireEvent.click(startQuizButton);
    expect(mockStartQuiz).toHaveBeenCalled();
    expect(mockStartQuiz).toHaveBeenCalledWith(sampleProps.questions);
  });

  it("should have the correct CSS classes", () => {
    const { container } = render(<MenuCard {...sampleProps} />);
    const menuContainer = container.querySelector(".menu-container");
    const menuSection = container.querySelector(".menu-section");
    const menuButton = container.querySelector(".menu-button");
    expect(menuContainer).toBeInTheDocument();
    expect(menuSection).toBeInTheDocument();
    expect(menuButton).toBeInTheDocument();
  });
});
