import type { ReactNode } from "react";

export interface BasicPageTitleProps {
  children?: ReactNode;
}

const BasicPageTitle = ({ children }: BasicPageTitleProps) => {
  return (
    <div className="my-6 ml-6">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 font-display">
        {children}
      </h1>
    </div>
  );
};

export default BasicPageTitle;
