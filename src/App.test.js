import App from "./App";
import { screen, render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<App />);
  screen.getByText("Hello world!");
});
