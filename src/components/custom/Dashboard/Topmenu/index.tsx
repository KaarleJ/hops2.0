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
    <div className="flex flex-row items-center justify-between md:border-l border-accent w-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="mini"
              onClick={() => setCollapsed(!collapsed)}
              className="px-0 py-2 opacity-0 md:opacity-100 w-24 md:w-min text-primary"
            >
              {collapsed ? <ChevronLast /> : <ChevronFirst />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Toggle sidemenu</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex flex-row items-center justify-end p-2 md:w-min">
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
        <Button
          size="mini"
          variant="outline"
          onClick={toggle5th}
          className="w-24 text-foreground hidden md:flex"
        >
          5th period
        </Button>
      </div>
      <Button
        size="mini"
        variant="outline"
        onClick={toggle5th}
        className="w-24 text-foreground md:hidden pr-2"
      >
        5th period
      </Button>
    </div>
  );
}
