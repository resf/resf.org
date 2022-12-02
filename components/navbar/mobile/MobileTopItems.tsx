import Logo from "./Logo";

import type { NavItems } from "@/types/navigation/NavItem";
import MobileMenuCloseButton from "./MobileMenuCloseButton";

export interface MobileTopItemsProps {
  items: NavItems;
}

const MobileTopItems = ({ items }: MobileTopItemsProps) => {
  return (
    <div className="px-5 pt-5 pb-6">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="-mr-2">
          <MobileMenuCloseButton />
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

export default MobileTopItems;
