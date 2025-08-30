import Link from "next/link";
import {
  BriefcaseIcon,
  BookOpenIcon,
  HomeIcon,
  DocumentTextIcon,
  RectangleStackIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

export const defaultNavItems = [
  { label: "Home", href: "/", icon: <HomeIcon className="w-6 h-6" /> },
  { label: "Experience", href: "/#experience", icon: <BriefcaseIcon className="w-6 h-6" /> },
  { label: "Projects", href: "/#projects", icon: <RectangleStackIcon className="w-6 h-6" /> },
  { label: "Education", href: "/#education", icon: <BookOpenIcon className="w-6 h-6" /> },
  { label: "Contact Me", href: "/#contact", icon: <InboxIcon className="w-6 h-6" /> },
  {
    label: "Resume",
    href: "/Resume.pdf", 
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <DocumentTextIcon className="w-6 h-6" />,
  },
];

export default function SidebarNav() {
  return (
    <nav className="flex flex-col gap-4">
      {defaultNavItems.map((item) => {
        const isExternal = item.href.endsWith(".pdf") || item.href.startsWith("http");

        if (isExternal) {
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="flex items-center gap-2 hover:text-blue-500"
            >
              {item.icon}
              {item.label}
            </a>
          );
        }

        return (
          <Link key={item.label} href={item.href}>
            <a className="flex items-center gap-2 hover:text-blue-500">
              {item.icon}
              {item.label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
}
