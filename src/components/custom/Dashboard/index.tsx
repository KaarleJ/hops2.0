import { Separator } from "@/components/ui/separator";
import SideMenu from "./Sidemenu";
import TopMenu from "./TopMenu";

export default function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="w-full h-full my-6 border border-border rounded-sm flex flex-row justify-start items-stretch">
      <SideMenu />
      <div className="w-full h-full rounded-sm flex flex-col justify-start">
        <TopMenu />
        <Separator />
        {children}
      </div>
    </div>
  );
}
