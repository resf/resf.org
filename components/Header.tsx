import { Popover } from "@headlessui/react";

import NavbarDesktop from "./navbar/desktop/NavbarDesktop";
import NavbarMobile from "./navbar/mobile/NavbarMobile";

import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface HeaderProps {
  menu: {
    projectItems: NavItems;
    // menuItems: NavItems;
    aboutItems: NavItems;
    actionItems: NavActionItems;
  };
}

export default function Header({ menu }: HeaderProps) {
  return (
    <Popover className="relative bg-white">
      <NavbarDesktop
        projectItems={menu.projectItems}
        // menuItems={menu.menuItems}
        aboutItems={menu.aboutItems}
        actionItems={menu.actionItems}
      />
      <NavbarMobile
        projectItems={menu.projectItems}
        // menuItems={menu.menuItems}
        aboutItems={menu.aboutItems}
        actionItems={menu.actionItems}
      />
    </Popover>
  );
}
