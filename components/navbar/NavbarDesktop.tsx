import { Popover } from "@headlessui/react";

import DesktopItem from "./DesktopItem";
import Logo from "./Logo";
import MobileMenuOpenButton from "./MobileMenuOpenButton";
import DesktopDropdownItem from "./DesktopDropdownItem";
import DesktopActionItem from "./DesktopActionItem";

import type { DropdownItems } from "@/types/DropdownItem";

export interface NavbarDesktopProps {
  projectItems: DropdownItems;
  aboutItems: DropdownItems;
}

const NavbarDesktop = ({ projectItems, aboutItems }: NavbarDesktopProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Logo />
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <MobileMenuOpenButton />
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <DesktopDropdownItem items={projectItems} isFirstMenuItem={true}>
            Projects
          </DesktopDropdownItem>
          <DesktopItem href="/sponsors">Sponsors</DesktopItem>
          <DesktopItem href="/partners">Partners</DesktopItem>
          <DesktopDropdownItem items={aboutItems} isFirstMenuItem={false}>
            About
          </DesktopDropdownItem>
        </Popover.Group>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <DesktopActionItem href="/joinus">Join Us</DesktopActionItem>
        </div>
      </div>
    </div>
  );
};
export default NavbarDesktop;
