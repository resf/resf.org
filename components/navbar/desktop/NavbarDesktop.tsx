import { Popover } from "@headlessui/react";

import DesktopItem from "./DesktopItem";
import Logo from "./Logo";
import MobileMenuOpenButton from "./MobileMenuOpenButton";
// import DesktopDropdownItem from "./DesktopDropdownItem";
// import DesktopActionItem from "./DesktopActionItem";

import type { NavItems } from "@/types/navigation/NavItem";
// import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface NavbarDesktopProps {
  // projectItems: NavItems;
  menuItems: NavItems;
  // actionItems: NavActionItems;
}

const NavbarDesktop = ({
  // projectItems,
  menuItems,
}: // actionItems,
NavbarDesktopProps) => {
  return (
    <div className="mx-auto max-w-7xl sm:px-2">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
        <div>
          <Logo />
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <MobileMenuOpenButton />
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            {menuItems.map((item) => (
              <DesktopItem key={item.name} href={item.href}>
                {item.name}
              </DesktopItem>
            ))}
            {/* Leaving this functionality in case we need it in the future. */}
            {/* <DesktopDropdownItem
              items={projectItems}
              openNewTab={true}
              isFirstMenuItem={true}
            >
              Projects
            </DesktopDropdownItem> */}
          </Popover.Group>
        </div>
      </div>
    </div>
  );
};
export default NavbarDesktop;
