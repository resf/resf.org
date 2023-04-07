import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

import type { ReactNode } from "react";

export interface TierProps {
  name: string;
  children?: ReactNode;
}

const TierItem = ({ name, children }: TierProps) => {
  return (
    <div key={name} className="pt-6">
        <>
          <div className="sticky top-24 bg-white bg-opacity-90">
            <div className="flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-2xl font-bold leading-7 font-display ml-4 lg:ml-7">
                {name}
              </span>
            </div>
          </div>
          <div className="mt-2 pr-12">
            <div className="mt-12 mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {children}
            </div>
          </div>
        </>
    </div>
  );
};

export default TierItem;
