import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { ThemeProvider as NextThemeProvider } from "next-themes";


const Layout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <NextThemeProvider attribute="class">
    <div className="flex flex-col min-h-screen bg-zinc-100">
      <div>
      </div>
        <div className="grid md:grid-cols-sidebar bg-sidebar">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <div className="md:col-span-sidebar">{props.children}</div>
        </div>

    </div>
    </NextThemeProvider>
  );
};

export default Layout;
