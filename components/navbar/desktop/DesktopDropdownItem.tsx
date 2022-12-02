import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "@/utils/classNames";

import type { NavItems } from "@/types/navigation/NavItem";

export interface DesktopDropdownItemProps {
  children?: ReactNode;
  items: NavItems;
  isFirstMenuItem: boolean;
}

const DesktopDropdownItem = ({
  children,
  items,
  isFirstMenuItem,
}: DesktopDropdownItemProps) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group inline-flex items-center bg-white text-base font-medium hover:text-gray-900 focus:outline-none"
            )}
          >
            <span>{children}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={classNames(
                isFirstMenuItem ? "-ml-4 lg:left-1/2 lg:ml-0" : "left-1/2",
                "absolute z-10 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:-translate-x-1/2"
              )}
            >
              <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center p-3 hover:bg-gray-50"
                    >
                      {item.icon && (
                        <picture>
                          <img
                            src={item.icon}
                            alt={`${item.name} icon`}
                            className="h-10 w-10 flex-shrink-0 text-blue-600"
                            aria-hidden="true"
                          />
                        </picture>
                      )}
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default DesktopDropdownItem;
