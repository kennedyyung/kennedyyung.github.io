import React from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"
import classNames from "classnames"
const Navbar = props => {
  return (
    <nav
      className={classNames({
        "bg-base/90 dark:bg-dark-base/80 text-black dark:text-dark-text backdrop-blur": true, // colors
        "flex items-center": true, // layout
        "w-full fixed z-10 px-4 shadow-sm h-16 border-b border-black/10 dark:border-white/10": true //positioning & styling
      })}
    >

      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  )
}

export default Navbar