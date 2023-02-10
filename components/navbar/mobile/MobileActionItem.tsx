import Link from "next/link";

import type { ReactNode } from "react";

export interface MobileActionItemProps {
  children?: ReactNode;
  href: string;
}

const MobileActionItem = ({ children, href }: MobileActionItemProps) => {
  return (
    <p className="mt-3 text-center text-base font-medium text-gray-500 flex flex-col">
      <Link
        href={href}
        target="_blank"
        // className="text-blue-600 hover:text-blue-500"
        className="inline-flex items-center justify-center whitespace-nowrap border border-none bg-gradient-to-br from-green-500 to-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:from-green-600 hover:to-blue-600"
      >
        {children}
      </Link>
    </p>
  );
};

export default MobileActionItem;
