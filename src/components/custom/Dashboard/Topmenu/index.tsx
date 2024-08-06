import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AddCourseModal from "../../modals/AddCourseModal";

interface TopMenuProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function TopMenu({ collapsed, setCollapsed }: TopMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const year = parseInt(
    search.get("year") || new Date().getFullYear().toString()
  );

  const setYear = (year: number) => {
    router.push(pathname + "?year=" + year);
  };

  return (
    <div className="flex flex-row items-center justify-between border-l border-accent">
      <div className="col-start-1 flex items-center text-primary">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="mini"
                onClick={() => setCollapsed(!collapsed)}
                className="px-0 py-2"
              >
                {collapsed ? <ChevronLast /> : <ChevronFirst />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Toggle sidemenu</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="col-start-2 flex flex-row items-center justify-center p-2">
        <Button
          size="mini"
          variant="ghost"
          className="md:mx-6 text-primary"
          onClick={() => setYear(year - 1)}
        >
          <ChevronLeft size={22} />
        </Button>
        <h6 className="text-center">{year}</h6>
        <Button
          size="mini"
          variant="ghost"
          className="md:mx-6 text-primary"
          onClick={() => setYear(year + 1)}
        >
          <ChevronRight size={22} />
        </Button>
        <AddCourseModal year={year}/>
      </div>
    </div>
  );
}
