import React from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import classNames from "classnames"
import ThemeSwitcher from "./ThemeSwitcher";
const Navbar = props => {
  return (
    <nav
      className={classNames({
        "bg-base dark:bg-dark-base text-black dark:text-dark-text": true, // colors
        "flex items-center": true, // layout
        "w-full fixed z-10 px-4 shadow-sm h-16": true //positioning & styling
      })}
    >
      <ThemeSwitcher/>
      {/* <div>
      <div className="font-bold text-lg">Kennedy Yung</div>
      <ThemeSwitcher/>
      </div> */}
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  )
}

export default Navbar
