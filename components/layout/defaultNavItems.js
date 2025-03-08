import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  BriefcaseIcon,
  BookOpenIcon,
  HomeIcon,
  DocumentTextIcon,
  RectangleStackIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
// import { NavItem } from "./Sidebar";

export const defaultNavItems = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Experience",
    href: "/#experience",
    icon: <BriefcaseIcon className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "/#projects",
    icon: <RectangleStackIcon className="w-6 h-6" />,
  },
  {
    label: "Education",
    href: "/#education",
    icon: <BookOpenIcon className="w-6 h-6" />,
  },
  {
    label: "Contact Me",
    href: "/#contact",
    icon: <InboxIcon className="w-6 h-6" />,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1KsULoZlXs880M5bnK3rAkRvukFCvn2q-/view?usp=sharing",
    rel: "noopener noreferrer",
    target: "_blank",
    icon: <DocumentTextIcon className="w-6 h-6" />,
    
  },


];
