import { fireEvent, render, screen } from "@testing-library/react";

import Button from "../../components/Button";

describe("Button Component", () => {
  it("should render a button", () => {
    render(<Button />);

    const buttonElement = screen.getByRole("button", { name: /Alert/i });

    expect(buttonElement).toBeInTheDocument();
  });

  it("should show alert on button click", () => {
    render(<Button />);

    global.alert = jest.fn();

    const buttonElement = screen.getByRole("button", { name: /Alert/i });

    fireEvent.click(buttonElement);

    expect(global.alert).toHaveBeenCalledTimes(1);
  });
});
