import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import type { ReactNode } from "react";

export interface MobileMenuPanelProps {
  children?: ReactNode;
}

const MobileMenuPanel = ({ children }: MobileMenuPanelProps) => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          {children}
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default MobileMenuPanel;
