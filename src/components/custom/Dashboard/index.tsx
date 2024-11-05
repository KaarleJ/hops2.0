"use client";

import { Separator } from "@/components/ui/separator";
import SideMenu from "./Sidemenu";
import TopMenu from "./Topmenu";
import Toolbar from "./Toolbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false); // controls the side menu collapse
  const pathname = usePathname();

  return (
    <div className="w-full h-[50rem] md:h-[40rem] md:my-6 border border-border rounded-sm flex flex-row justify-start items-stretch relative">
      <SideMenu collapsed={collapsed} />
      <div className="w-full h-full rounded-sm flex flex-col justify-start">
        <TopMenu
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Separator />
        <div className="border-l border-accent h-full overflow-x-scroll md:overflow-x-hidden overflow-y-auto relative">
          {children}
        </div>
        {pathname === "/calendar" && <Toolbar />}
      </div>
    </div>
  );
}
