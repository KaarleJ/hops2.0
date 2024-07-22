"use client";

import { Separator } from "@/components/ui/separator";
import SideMenu from "./Sidemenu";
import TopMenu from "./TopMenu";
import { useState } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false); // controls the side menu collapse
  
  return (
    <div className="w-full h-full my-6 border border-border rounded-sm flex flex-row justify-start items-stretch">
      <SideMenu collapsed={collapsed}/>
      <div className="w-full h-full rounded-sm flex flex-col justify-start">
        <TopMenu collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Separator />
        {children}
      </div>
    </div>
  );
}