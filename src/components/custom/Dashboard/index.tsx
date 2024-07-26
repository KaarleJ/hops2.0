"use client";

import { Separator } from "@/components/ui/separator";
import SideMenu from "./Sidemenu";
import TopMenu from "./TopMenu";
import { useState } from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false); // controls the side menu collapse

  return (
    <div className="w-full h-[32rem] my-6 border border-border rounded-sm flex flex-row justify-start items-stretch relative">
      <SideMenu collapsed={collapsed} />
      <div className="w-full h-full rounded-sm flex flex-col justify-start">
        <TopMenu collapsed={collapsed} setCollapsed={setCollapsed} />
        <Separator />
        <div className="border-l border-accent h-full">{children}</div>
      </div>
    </div>
  );
}
