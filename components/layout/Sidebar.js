import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";
import ThemeSwitcher from "./ThemeSwitcher"; 
import { useRouter } from "next/router";

const Sidebar = ({ open, setOpen }) => {
  const ref = useRef(null);
  const router = useRouter();

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, 
        "bg-sidebar text-black": true,
        "md:w-full md:sticky md:top-1 md:z-0 top-0 z-20 fixed": true, 
        "md:h-screen w-[300px] overflow-y-auto": true, 
        "transition-transform duration-300 ease-in-out md:-translate-x-0": true,
        "-translate-x-full": !open, 
      })}
      ref={ref}
    >
      <nav className="md:sticky mt-10 md:top-1">
        <div className="flex items-center justify-center mt-10">
          <Image
            src="/icon.jpg" 
            height={100}
            width={200}
            alt="profile image"
            className="rounded-full"
          />
        </div>

        <div className="font-bold text-lg text-black flex items-center justify-center mt-2 mb-2">
          Kennedy Yung
        </div>

        <div className="grid grid-flow-row items-center justify-center">
          <div>
            <Link href="https://www.linkedin.com/in/kennedy-yung/" rel="noopener noreferrer" target="_blank">
              <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} className="inline-block mx-5 rounded-md hover:bg-sky-100" />
            </Link>
            <Link href="https://github.com/kennedyyung" rel="noopener noreferrer" target="_blank">
              <Image src="/github.png" alt="GitHub" width={32} height={32} className="inline-block mx-5 rounded-md hover:bg-sky-100" />
            </Link>
            <Link href="https://devpost.com/kennedyyung?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" rel="noopener noreferrer" target="_blank">
              <Image src="/DevPost.png" alt="DevPost" width={40} height={36} className="inline-block mx-5 rounded-md hover:bg-sky-100" />
            </Link>
          </div>
        </div>

        <ul className="py-1 flex flex-col gap-1">
          {defaultNavItems.map((item) => {
            const isExternal =
              item.href.endsWith(".pdf") || item.href.startsWith("http");
            const isActive = !isExternal && router.asPath === item.href;

            const linkClassName = classNames(
              "flex gap-4 items-center rounded-md p-2 mx-2 transition-colors duration-200",
              isActive
                ? "bg-black/10 text-black"
                : "text-black/90 hover:bg-black/10"
            );

            if (isExternal) {
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    className={linkClassName}
                  >
                    {item.icon} {item.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={linkClassName}
                  onClick={() => setOpen(false)}
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex justify-center my-8">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
