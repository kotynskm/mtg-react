import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import Favorites from "../Favorites";
// error when creating test due to fetch not being defined in node, installed node fetch
import fetch from "node-fetch";
globalThis.fetch = fetch;

describe("Favorites", () => {
  // TODO:
  // use find by test ID
  it("should render favorite cards", () => {
    render(<Favorites />);
    const cardsDiv = screen.findByTestId("favorite-cards");
    waitFor(() => expect(cardsDiv).toBeInTheDocument());
  });
});
