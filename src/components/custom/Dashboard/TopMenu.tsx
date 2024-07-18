"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();
  const year = parseInt(search.get("year") || new Date().getFullYear().toString());

  const setYear = (year: number) => {
    router.push(pathname + "?year=" + year);
  };

  return (
    <div className="p-2 grid grid-cols-3 ">
      <div className="col-start-2 flex flex-row items-center justify-center">
        <Button
          size="mini"
          variant="ghost"
          className="mx-6 text-primary"
          onClick={() => setYear(year - 1)}
        >
          <ChevronLeft size={22} />
        </Button>
        <h6 className="text-center">{year}</h6>
        <Button
          size="mini"
          variant="ghost"
          className="mx-6 text-primary"
          onClick={() => setYear(year + 1)}
        >
          <ChevronRight size={22} />
        </Button>
      </div>
      <div className="col-start-3 flex flex-row justify-end">
        <Button size="mini">Add Course</Button>
      </div>
    </div>
  );
}
