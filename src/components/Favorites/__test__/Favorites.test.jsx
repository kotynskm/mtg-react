import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import Favorites from "../Favorites";
// need this import for testing
import "@testing-library/jest-dom";
// error when creating test due to fetch not being defined in node, installed node fetch
import fetch from "node-fetch";
globalThis.fetch = fetch;

describe("Favorites", () => {
  // use find by test ID
  it("should render favorite cards", () => {
    render(<Favorites />);
    const cardsDiv = screen.getByTestId("favorite-cards");
    expect(cardsDiv).toBeInTheDocument();
    // waitFor(() => expect(cardsDiv).toBeInTheDocument());
  });
});
