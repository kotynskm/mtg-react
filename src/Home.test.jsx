import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import Home from "./Home";
import App from "./App";

it("should have welcome to MTG app", () => {
  render(<Home />);
  const message = screen.getByText(/welcome to mtg react app/i);
  waitFor(() => expect(message).toBeInTheDocument());
});

it("should be a heading element", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", {
    name: "Welcome to MTG React App",
  });
  waitFor(() => expect(heading).toBeInTheDocument());
});
