import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";
import ThemeSwitcher from "./ThemeSwitcher"; 

const Sidebar = ({ open, setOpen }) => {
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, 
        "bg-sidebar text-black": true, 
        "md:w-full md:sticky md:top-1 md:z-0 top-0 z-20 fixed": true, 
        "md:h-screen w-[300px] overflow-y-auto": true, 
        "transition-transform .3s ease-in-out md:-translate-x-0": true, 
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
              <img src="linkedin.png" alt="LinkedIn" className="inline-block w-8 h-8 mx-5 hover:bg-sky-100"/>
            </Link>
            <Link href="https://github.com/kennedyyung" rel="noopener noreferrer" target="_blank">
              <img src="github.png" alt="GitHub" className="inline-block w-8 h-8 mx-5 hover:bg-sky-100"/>
            </Link>
            <Link href="https://devpost.com/kennedyyung?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" rel="noopener noreferrer" target="_blank">
              <img src="DevPost.png" alt="DevPost" className="inline-block w-10 h-9 mx-5 hover:bg-sky-100"/>
            </Link>
          </div>
        </div>

        <ul className="py-1 flex flex-col gap-1">
          {defaultNavItems.map((item, index) => (
            <a key={index} href={item.href}>
              <li
                className={classNames({
                  "text-black hover:bg-indigo-900": true, 
                  "flex gap-4 items-center": true, 
                  "transition-colors duration-300": true, 
                  "rounded-md p-2 mx-2": true 
                })}
              >
                {item.icon} {item.label}
              </li>
            </a>
          ))}
        </ul>
      </nav>
      <div className="flex justify-center my-8">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
