import { Popover } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import type { NavItems } from "@/types/navigation/NavItem";

export interface MobileProjectItemsProps {
  items: NavItems;
}

const MobileProjectItems = ({ items }: MobileProjectItemsProps) => {
  return (
    <div className="px-5 pt-5 pb-6">
      <div className="flex items-center justify-between">
        <div>
          <picture>
            <img className="h-8 w-auto" src="/icon-text.svg" alt="RESF" />
          </picture>
        </div>
        <div className="-mr-2">
          <Popover.Button className="inline-flex items-center justify-center bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>
      <div className="mt-6">
        <nav className="grid gap-y-8">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-m-3 flex items-center p-3 hover:bg-gray-50"
            >
              <picture>
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="h-6 w-6 flex-shrink-0 text-blue-600"
                  aria-hidden="true"
                />
              </picture>
              <span className="ml-3 text-base font-medium text-gray-900">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileProjectItems;
