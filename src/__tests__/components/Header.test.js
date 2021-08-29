import { render, screen } from "@testing-library/react";

import Header from "../../components/Header";

describe("Header Component", () => {
  it("should render a header with passed title", () => {
    render(<Header title="Ummm" />);

    const title = screen.getByText(/Ummm/i);

    expect(title).toBeInTheDocument();
  });
});
