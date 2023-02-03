import classNames from "@/utils/classNames";
import type { ReactNode } from "react";

export interface BasicPageTitleProps {
  children?: ReactNode;
  className?: string;
  subtext?: string;
}

const BasicPageTitle = ({
  children,
  className,
  subtext,
}: BasicPageTitleProps) => {
  return (
    <div className="my-6 ml-6">
      <h1
        className={classNames(
          className ? className : "",
          "text-2xl font-bold tracking-tight text-gray-900 font-display"
        )}
      >
        {children}
      </h1>
      {subtext && <p className="mt-2">{subtext}</p>}
    </div>
  );
};

export default BasicPageTitle;
