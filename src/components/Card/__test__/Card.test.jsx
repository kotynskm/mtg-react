import { BorderStyle } from "@mui/icons-material";
import { fireEvent, render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card";
import "@testing-library/jest-dom";
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
  it("should have a popup for cards added to favorites", async () => {
    render(<MockCardComponent />);
    const addButton = screen.getByRole("button", { name: /Add to Favorites/i });
    userEvent.click(addButton);
    screen.debug();
    // const divElement = screen.getByText("Card added to Favorites!");
    // expect(divElement).toBeInTheDocument();
    await waitFor(() => {
      // expect(screen.getByText("Card added to Favorites!")).toBeInTheDocument();
      const divElement = screen.getByText("Card added to Favorites!");
      expect(divElement).toBeInTheDocument();
    });
  });
});
