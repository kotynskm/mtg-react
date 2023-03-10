import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import HitPoints from "../HitPoints";

describe("HitPoints", () => {
  // check that the elements are displaying correct hitpoints
  it("should render the correct amount of hitpoints", () => {
    render(<HitPoints />);
    const valueElement = screen.getAllByText(/20/i);
    waitFor(() => expect(valueElement.length).toBe(2));
  });

  // check that element is visible to the user (test for potential style changes that could affect the element)
  it("should be visible to the user", () => {
    render(<HitPoints />);
    const valueElement = screen.getAllByText(/20/i);
    waitFor(() => expect(valueElement).toBeVisible());
  });
});
