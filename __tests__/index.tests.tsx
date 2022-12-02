import { render, screen } from "@testing-library/react";
import { matchInnerContent } from "@/utils/testingUtils";
import { appWithTranslation } from "next-i18next";

import IndexPage from "@/pages/index";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe("Index Page", () => {
  // it("renders header with teaser", () => {
  //   render(<IndexPage />);
  //   expect(
  //     screen.getByRole("heading", {
  //       name: /somethingexcitingcoming/,
  //     })
  //   ).toBeInTheDocument();
  // });
  // it("renders informational text with link", () => {
  //   render(<IndexPage />);
  //   expect(
  //     screen.getByText(matchInnerContent(/workonbringingwebsite/))
  //   ).toBeInTheDocument();
  // });
});
