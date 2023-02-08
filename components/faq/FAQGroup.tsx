import type { ReactNode } from "react";

export interface FAQGroupProps {
  children?: ReactNode;
  title?: string;
}

const FAQGroup = ({ children, title }: FAQGroupProps) => {
  return (
    <div className="mt-10">
      {title && <h2 className="font-[600] text-xl">{title}</h2>}
      <ul className="ml-8 mt-1 list-disc">{children}</ul>
    </div>
  );
};

export default FAQGroup;
