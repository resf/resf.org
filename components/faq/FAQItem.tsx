import Link from "next/link";
import type { ReactNode } from "react";

export interface FAQItemProps {
  children?: ReactNode;
  slug: string;
}

const FAQItem = ({ children, slug }: FAQItemProps) => {
  return (
    <li>
      <div className="flex w-full items-start justify-between text-left text-gray-900 max-w-4xl">
        <Link href={`/faq/${slug}`}>
          <span className="text-base font-semibold leading-7 hover:text-rockyGreen">
            {children}
          </span>
        </Link>
      </div>
    </li>
  );
};
export default FAQItem;
