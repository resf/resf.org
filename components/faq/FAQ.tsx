import FAQGroup from "./FAQGroup";
import FAQItem from "./FAQItem";

import type { ReactElement, ReactNode } from "react";

export interface FAQProps {
  children?: ReactNode;
}

export type FAQComponent = ReactElement & {
  Group?: ReactNode;
  Item?: ReactNode;
};

const FAQ = ({ children }: FAQProps): FAQComponent => {
  return <div className="flex flex-col ml-4">{children}</div>;
};

FAQ.Group = FAQGroup;
FAQ.Item = FAQItem;

export default FAQ;
