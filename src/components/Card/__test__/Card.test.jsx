import { BorderStyle } from "@mui/icons-material";
import { fireEvent, render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card";
// error when creating test due to fetch not being defined in node, installed node fetch
import fetch from "node-fetch";
globalThis.fetch = fetch;

// make mock card component because of Link, we need BrowserRouter
const MockCardComponent = () => {
  return (
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  );
};

describe("Card", () => {
  // card should have a button
  it("should have an add favorite button", () => {
    render(<MockCardComponent />);
    const addButton = screen.getByRole("button");
    waitFor(() => expect(addButton).toBeInTheDocument());
  });

  // should display message when card is added to favorites
  it("should have an add favorite button", () => {
    render(<MockCardComponent />);
    const addButton = screen.getByRole("button", { name: /Add to Favorites/i });
    fireEvent.click(addButton);
    waitFor(() => expect("Card added to Favorites!").toBeInTheDocument());
  });
});
