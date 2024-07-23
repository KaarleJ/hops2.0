import { Separator } from "@/components/ui/separator";
import SideMenuItem from "./SideMenuItem";
import { LayoutDashboard, CalendarDays, List, BarChart } from "lucide-react";

interface SideMenuProps {
  collapsed: boolean;
}

export default function SideMenu({ collapsed }: SideMenuProps) {
  return (
    <div
      className={`h-full flex flex-col items-start justify-start transition-all duration-500 ${
        collapsed ? "w-10" : "w-44"
      }`}
    >
      <div className="flex flex-row items-center justify-between py-2 pl-2 ">
        <LayoutDashboard size={24} className="text-primary" />
        <span className={`text-md font-bold mx-1 ${collapsed && "hidden"}`}>
          Dashboard
        </span>
      </div>
      <Separator />
      <div>
        <SideMenuItem>
          <CalendarDays size={24} className="text-primary" />
          <span className={`mx-1 ${collapsed && "hidden"}`}>Calendar</span>
        </SideMenuItem>
        <SideMenuItem to='courselist'>
          <List size={24} className="text-primary" />
          <span className={`mx-1 ${collapsed && "hidden"}`}>Courselist</span>
        </SideMenuItem>
        <SideMenuItem to="loadview">
          <BarChart size={24} className="text-primary" />
          <span className={`mx-1 ${collapsed && "hidden"}`}>Loadview</span>
        </SideMenuItem>
      </div>
    </div>
  );
}
