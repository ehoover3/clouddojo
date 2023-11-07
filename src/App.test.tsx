import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";

test("The heading 'CloudDojo' is present in App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const headingElement = screen.getByText("CloudDojo");
  expect(headingElement).toBeInTheDocument();
});
