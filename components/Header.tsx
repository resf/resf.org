import { Popover } from "@headlessui/react";

import NavbarDesktop from "./navbar/NavbarDesktop";
import NavbarMobile from "./navbar/mobile/NavbarMobile";

import type { DropdownItems } from "@/types/DropdownItem";

export interface HeaderProps {
  menu: {
    projectItems: DropdownItems;
    aboutItems: DropdownItems;
  };
}

export default function Header({ menu }: HeaderProps) {
  return (
    <Popover className="relative bg-white">
      <NavbarDesktop
        projectItems={menu.projectItems}
        aboutItems={menu.aboutItems}
      />
      <NavbarMobile
        projectItems={menu.projectItems}
        aboutItems={menu.aboutItems}
      />
    </Popover>
  );
}
