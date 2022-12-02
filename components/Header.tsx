import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { projectDropdownItems, aboutDropdownItems } from "@/config/menu";

import NavbarDesktop from "./navbar/NavbarDesktop";

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <NavbarDesktop
        projectItems={projectDropdownItems}
        aboutItems={aboutDropdownItems}
      />
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
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <picture>
                    <img
                      className="h-8 w-auto"
                      src="/icon-text.svg"
                      alt="RESF"
                    />
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
                  {projectDropdownItems.map((item) => (
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
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Sponsors
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Partners
                </a>
                {aboutDropdownItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Join Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
