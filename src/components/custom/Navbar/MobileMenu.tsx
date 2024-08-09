import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { Session } from "next-auth";
import { MenuIcon, HomeIcon, CalendarDays, List, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileMenu({ session }: { session: Session | null }) {
  return (
    <div className="flex items-center text-left md:hidden w-24">
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={32} />
        </SheetTrigger>
        <SheetContent side="left" className="w-1/2">
          <SheetHeader className="py-4 text-start">
            <SheetTitle>Hops</SheetTitle>
          </SheetHeader>
          <Separator />
          <div className="flex flex-col items-start justify-around py-4">
            <Link href="/" className="flex py-2">
              <HomeIcon size={24} className="mr-2 text-primary" />
              Home
            </Link>
            <Link href="/calendar" className="flex py-2">
              <CalendarDays size={24} className="mr-2 text-primary" />
              Calendar
            </Link>
            <Link href="/calendar/courselist" className="flex py-2">
              <List size={24} className="mr-2 text-primary" />
              Courselist
            </Link>
            <Link href="/calendar/loadview" className="flex py-2">
              <BarChart size={24} className="mr-2 text-primary" />
              Loadview
            </Link>
          </div>
          <Separator />
          <div className="h-1/2 flex flex-col items-center justify-end">
            <Button asChild>
              {session ? (
                <Link href="/auth/signout">Sign out</Link>
              ) : (
                <Link href="/auth/signin">Sign in</Link>
              )}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
