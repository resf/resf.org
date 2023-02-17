import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

import type { ReactNode } from "react";

export interface TierProps {
  name: string;
  children?: ReactNode;
}

const TierItem = ({ name, children }: TierProps) => {
  return (
    <Disclosure key={name} defaultOpen as="div" className="pt-6">
      {({ open }) => (
        <>
          <dt className="sticky top-0 bg-white bg-opacity-90">
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-2xl font-bold leading-7 font-display ml-4 lg:ml-7">
                {name}
              </span>
              <span className="ml-6 flex h-7 items-center mr-4 lg:mr-7">
                {open ? (
                  <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-2 pr-12">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {children}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default TierItem;
