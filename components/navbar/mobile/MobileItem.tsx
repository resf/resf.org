import Link from "next/link";

import type { ReactNode } from "react";

export interface MobileItemProps {
  children?: ReactNode;
  href: string;
}

const MobileItem = ({ children, href }: MobileItemProps) => {
  return (
    <Link
      href={href}
      className="text-base font-medium text-gray-900 hover:text-gray-700"
    >
      {children}
    </Link>
  );
};

export default MobileItem;
