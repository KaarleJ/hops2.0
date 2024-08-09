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
import { useParams } from "@/hooks/useParams";

interface TopMenuProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function TopMenu({ collapsed, setCollapsed }: TopMenuProps) {
  const { setParam, search } = useParams();
  const year = parseInt(
    search.get("year") || new Date().getFullYear().toString()
  );

  function toggle5th() {
    const current = search.get("show5th") === "true";
    setParam("show5th", !current);
  }

  return (
    <div className="flex flex-row items-center justify-center md:justify-between md:border-l border-accent">
      <div className="hidden md:flex items-center text-primary">
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
      <div className="flex flex-row items-center justify-between p-2 w-full md:w-min">
        <Button size="mini" variant="outline" onClick={toggle5th} className="w-24">
          5th period
        </Button>
        <Button
          size="mini"
          variant="ghost"
          className="md:mx-6 text-primary"
          onClick={() => setParam("year", year - 1)}
        >
          <ChevronLeft size={22} />
        </Button>
        <h6 className="text-center">{year}</h6>
        <Button
          size="mini"
          variant="ghost"
          className="md:mx-6 text-primary"
          onClick={() => setParam("year", year + 1)}
        >
          <ChevronRight size={22} />
        </Button>
        <AddCourseModal year={year} />
      </div>
    </div>
  );
}
