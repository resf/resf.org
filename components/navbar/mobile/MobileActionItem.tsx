import Link from "next/link";

import type { ReactNode } from "react";

export interface MobileActionItemProps {
  children?: ReactNode;
  href: string;
}

const MobileActionItem = ({ children, href }: MobileActionItemProps) => {
  return (
    <p className="mt-6 text-center text-base font-medium text-gray-500">
      <Link
        href={href}
        target="_blank"
        className="text-blue-600 hover:text-blue-500"
      >
        {children}
      </Link>
    </p>
  );
};

export default MobileActionItem;
