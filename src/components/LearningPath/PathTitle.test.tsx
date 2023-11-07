import React from "react";
import { render, screen } from "@testing-library/react";
import PathTitle from "./PathTitle"; // Adjust the import path as needed

// Mock the constants used in the component
jest.mock("../../data/constants", () => ({
  AWS_CLOUD_CONCEPTS_WIDTH: 100, // Replace with an appropriate value
  X: [50], // Replace with an appropriate value
}));

describe("PathTitle Component", () => {
  it("renders the top and bottom text", () => {
    const props = {
      y: 20, // Adjust as needed
      topText: "Top Text",
      bottomText: "Bottom Text",
    };

    render(<PathTitle {...props} />);

    // Assert that the top and bottom text is displayed
    expect(screen.getByText("Top Text")).toBeInTheDocument();
    expect(screen.getByText("Bottom Text")).toBeInTheDocument();
  });

  it("calculates the left position correctly", () => {
    const props = {
      y: 20, // Adjust as needed
      topText: "Top Text",
      bottomText: "Bottom Text",
    };

    render(<PathTitle {...props} />);

    // Calculate the expected left position using the provided constants
    const expectedLeft = `calc(50% + 50 - (100/2))`; // Adjust based on your constants

    // Assert that the left position is as expected
    expect(screen.getByText("Top Text")).toHaveStyle({ left: expectedLeft });
    expect(screen.getByText("Bottom Text")).toHaveStyle({ left: expectedLeft });
  });
});
