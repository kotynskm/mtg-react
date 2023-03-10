import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import Home from "../Home";

describe("Home", () => {
  // use GET by
  it("should have welcome to MTG app", () => {
    render(<Home />);
    const message = screen.getByText(/welcome to mtg react app/i);
    waitFor(() => expect(message).toBeInTheDocument());
  });

  // using FIND by, it is async
  it("should have welcome to MTG app", async () => {
    render(<Home />);
    const message = await screen.findByText(/welcome to mtg react app/i);
    waitFor(() => expect(message).toBeInTheDocument());
  });

  // using QUERY by, test for an element that is NOT inside the element
  it("should have welcome to MTG app", () => {
    render(<Home />);
    const message = screen.queryByText(/text not here/i);
    waitFor(() => expect(message).not.toBeInTheDocument());
  });

  // get by ROLE
  it("should be a heading element", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: "Welcome to MTG React App",
    });
    waitFor(() => expect(heading).toBeInTheDocument());
  });

  // get all by ROLE, returns an array of items, so we can test using the length
  it("should have welcome to MTG app", () => {
    render(<Home />);
    const messages = screen.getAllByRole("heading");
    waitFor(() => expect(messages.length).toBe(2));
  });
});
