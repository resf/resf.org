import type { ReactNode } from "react";

export interface BasicPageTitleProps {
  children?: ReactNode;
  className?: string;
  subtext?: string;
}

const BasicPageTitle = ({
  children,
  subtext,
}: BasicPageTitleProps) => {
  return (
      <div className="bg-white">
          <div className="pt-12 pb-8 px-6 sm:pt-16 sm:pb-12 lg:flex lg:justify-between lg:px-8">
              <div>
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-display">
                      {children}
                  </h2>
                  {subtext && <p className="mt-5 text-xl text-gray-500">{subtext}</p> }
              </div>
          </div>
      </div>
  );
};

export default BasicPageTitle;
