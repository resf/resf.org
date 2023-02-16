import { NavActionItems } from "@/types/navigation/NavActionItem";
import type { NavItems } from "@/types/navigation/NavItem";

export const projectDropdownItems: NavItems = [
  {
    name: "Rocky Linux",
    description: "A community-backed enterprise operating system.",
    href: "https://www.rockylinux.org/",
    icon: "/rl-logo-np.svg",
  },
  {
    name: "Peridot",
    description: "Cloud-native build & release tools.",
    href: "https://github.com/rocky-linux/peridot",
    icon: "/pd-logo-np.svg",
  },
];

export const menuItems: NavItems = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  // {
  //   name: "Sponsors",
  //   href: "/sponsors",
  // },
];

export const actionItems: NavActionItems = [
  {
    name: "Join Us",
    href: "https://chat.rockylinux.org/resf",
  },
];
