import MobileMenuPanel from "./MobileMenuPanel";
import MobileTopItems from "./MobileTopItems";
import MobileActionItem from "./MobileActionItem";
import MobileItem from "./MobileItem";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface NavbarMobileProps {
  projectItems: NavItems;
  aboutItems: NavItems;
  actionItems: NavActionItems;
}

const NavbarMobile = ({
  projectItems,
  aboutItems,
  actionItems,
}: NavbarMobileProps) => {
  return (
    <MobileMenuPanel>
      <MobileTopItems projectItems={projectItems} />
      <div className="space-y-6 px-5 pb-6">
        <h2 className="mt-4 mb-6 text-gray-700 flex items-center">
          <span>About</span>
          <ChevronDownIcon
            className="ml-2 h-4 w-4 text-gray-700"
            aria-hidden="true"
          />
        </h2>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {aboutItems.map((item) => (
            <MobileItem key={item.name} href={item.href}>
              {item.name}
            </MobileItem>
          ))}
        </div>
      </div>
      <div className="space-y-6 px-5 pb-6">
        <div>
          {actionItems.map((item) => (
            <MobileActionItem key={item.name} href={item.href}>
              {item.name}
            </MobileActionItem>
          ))}
        </div>
      </div>
    </MobileMenuPanel>
  );
};

export default NavbarMobile;
