import Link from "next/link";

import type { ReactNode } from "react";

export interface DesktopActionItemProps {
  children?: ReactNode;
  href: string;
}

const DesktopActionItem = ({ children, href }: DesktopActionItemProps) => {
  return (
    <Link
      href={href}
      className="ml-8 inline-flex items-center justify-center whitespace-nowrap border border-none bg-gradient-to-br from-green-500 to-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:from-green-600 hover:to-blue-600"
    >
      {children}
    </Link>
  );
};
export default DesktopActionItem;
