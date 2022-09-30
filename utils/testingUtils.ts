// This function allows us to match text with html tags inside.
// Use in place of TextMatcher
// For example: screen.getByText(matchInnerContent("Hello World"))
// Or With RegExp: screen.getByText(matchInnerContent(/Hello World/))
export const matchInnerContent =
  (textToMatch: string | RegExp) =>
  (_content: string, node: Element | null) => {
    let hasText: (node: Element | null) => boolean;
    if (typeof textToMatch === "object") {
      hasText = (node: Element | null) =>
        node === null || node.textContent === null
          ? false
          : (textToMatch as unknown as RegExp).test(node.textContent);
    } else {
      hasText = (node: Element | null) =>
        node?.textContent === (textToMatch as unknown as string);
    }

    const nodeHasText = hasText(node);
    const childrenDontHaveText =
      node === null
        ? true
        : Array.from(node.children).every((child) => !hasText(child));

    return nodeHasText && childrenDontHaveText;
  };
