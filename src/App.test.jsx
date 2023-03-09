import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import Home from "./Home";
import App from "./App";

it("should have welcome to MTG app", () => {
  render(<App />);
  const message = screen.getByText(/welcome to mtg react app/i);
  waitFor(() => expect(message).toBeInTheDocument());
});
