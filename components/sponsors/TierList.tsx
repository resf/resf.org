import type { ReactNode } from "react";

export interface TierListProps {
  children?: ReactNode;
}

const TierList = ({ children }: TierListProps) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white pb-16 sm:pb-24">
        <div>
          <div className="mx-auto divide-y divide-gray-900/10">
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {children}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierList;
