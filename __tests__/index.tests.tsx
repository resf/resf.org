import { render, screen } from "@testing-library/react";

import IndexPage from "pages/index";

describe("Index Page", () => {
  it("renders welcome text", () => {
    render(<IndexPage />);

    const welcomeHeading = screen.getByRole("heading", {
      name: /Welcome to Next.js!/i,
    });

    expect(welcomeHeading).toBeInTheDocument();
  });
});
