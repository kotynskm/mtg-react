import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import HitPoints from "../HitPoints";

it("should render the correct amount of hitpoints", () => {
  render(<HitPoints />);
  const valueElement = screen.getAllByText(/20/i);
  waitFor(() => expect(valueElement.length).toBe(2));
});
