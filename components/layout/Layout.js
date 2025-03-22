import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const Layout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <NextThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen bg-zinc-100">
        {/* Hide Navbar on screens larger than 'sm' */}
        <div className="block sm:hidden">
          <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
        </div>
        <div className="grid md:grid-cols-sidebar">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <div className="md:col-span-sidebar">{props.children}</div>
        </div>
      </div>
    </NextThemeProvider>
  );
};

export default Layout;