import MobileMenuPanel from "./MobileMenuPanel";
import MobileActionItem from "./MobileActionItem";
import MobileItem from "./MobileItem";
import Logo from "./Logo";

import MobileMenuCloseButton from "./MobileMenuCloseButton";

import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface NavbarMobileProps {
  menuItems: NavItems;
  actionItems: NavActionItems;
}

const NavbarMobile = ({ menuItems, actionItems }: NavbarMobileProps) => {
  return (
    <MobileMenuPanel>
      <div className="px-5 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="-mr-2">
            <MobileMenuCloseButton />
          </div>
        </div>
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 gap-y-4 gap-x-8">
            {menuItems.map((item) => (
              <MobileItem key={item.name} href={item.href}>
                {item.name}
              </MobileItem>
            ))}
          </div>
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
