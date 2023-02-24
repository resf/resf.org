import { Popover } from "@headlessui/react";

import DesktopItem from "./DesktopItem";
import Logo from "./Logo";
import MobileMenuOpenButton from "./MobileMenuOpenButton";
import DesktopActionItem from "./DesktopActionItem";

import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface NavbarDesktopProps {
  menuItems: NavItems;
  actionItems: NavActionItems;
}

const NavbarDesktop = ({ menuItems, actionItems }: NavbarDesktopProps) => {
  return (
    <div className="fixed z-50 bg-white bg-opacity-80 w-screen mx-auto left-0 right-0 max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Logo />
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <MobileMenuOpenButton />
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          {menuItems.map((item) => (
            <DesktopItem key={item.name} href={item.href}>
              {item.name}
            </DesktopItem>
          ))}
        </Popover.Group>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          {actionItems.map((item) => (
            <DesktopActionItem key={item.name} href={item.href}>
              {item.name}
            </DesktopActionItem>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavbarDesktop;
