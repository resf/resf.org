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
    href: "#",
    icon: "/pd-logo-np.svg",
  },
];

export const menuItems: NavItems = [
  {
    name: "Sponsors",
    href: "/sponsors",
  },
  {
    name: "Partners",
    href: "/partners",
  },
];

export const aboutDropdownItems: NavItems = [
  {
    name: "Charter & Bylaws",
    href: "/charter-bylaws",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

export const actionItems: NavActionItems = [
  {
    name: "Join Us",
    href: "/joinus",
  },
];