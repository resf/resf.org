import Link from "next/link";

import type { ReactNode } from "react";

export interface DesktopItemProps {
  children?: ReactNode;
  href: string;
}

const DesktopItem = ({ children, href }: DesktopItemProps) => {
  return (
    <Link
      href={href}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {children}
    </Link>
  );
};

export default DesktopItem;
