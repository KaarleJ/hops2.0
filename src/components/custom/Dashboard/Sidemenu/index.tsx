import { Separator } from "@/components/ui/separator";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu() {
  return (
    <div className="h-full flex flex-col items-start justify-start border-r border-accent">
      <div className="font-bold p-2">dashboard</div>
      <Separator />
      <SideMenuItem>Calendar</SideMenuItem>
      <SideMenuItem to='courselist'>CourseList</SideMenuItem>
      <SideMenuItem to='loadview'>Loadview</SideMenuItem>
    </div>
  )
}