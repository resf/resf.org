import { render, screen } from "@testing-library/react";
import { matchInnerContent } from "@/utils/testingUtils";

import IndexPage from "@/pages/index";

describe("Index Page", () => {
  it("renders header with teaser", () => {
    render(<IndexPage />);

    expect(
      screen.getByRole("heading", {
        name: /Something exciting is on the way!/,
      })
    ).toBeInTheDocument();
  });

  it("renders informational text with link", () => {
    render(<IndexPage />);

    expect(
      screen.getByText(
        matchInnerContent(/We are working on bringing you a great website!/)
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Rocky Linux" })
    ).toBeInTheDocument();

    expect(
      (screen.getByRole("link", { name: "Rocky Linux" }) as HTMLLinkElement)
        .href
    ).toBe("https://www.rockylinux.org/");
  });
});
