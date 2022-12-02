import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const MobileMenuOpenButton = () => {
  return (
    <Popover.Button className="inline-flex items-center justify-center bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
      <span className="sr-only">Open menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </Popover.Button>
  );
};

export default MobileMenuOpenButton;
