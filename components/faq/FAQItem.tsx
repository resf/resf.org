import Link from "next/link";
import type { ReactNode } from "react";

export interface FAQItemProps {
  children?: ReactNode;
  slug: string;
}

const FAQItem = ({ children, slug }: FAQItemProps) => {
  return (
    <li>
      <Link href={`/faq/${slug}`}>
        <div className="flex w-full items-start justify-between text-left text-gray-900 hover:text-rockyGreen">
          <span className="text-base font-semibold leading-7 max-w-2xl">
            {children}
          </span>
        </div>
      </Link>
    </li>
  );
};
export default FAQItem;
