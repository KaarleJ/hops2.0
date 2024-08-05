"use client";
import Dashboard from "@/components/custom/Dashboard";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function CalendarPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const search = useSearchParams();
  const path = usePathname();

  const isCalendar = path === "/calendar";
  const key = JSON.stringify(Object.fromEntries(search.entries()));

  return (
    <div className="mt-28 flex min-h-screen flex-col items-center justify-start">
      <div className="px-4 md:px-28 py-6 md:py-24 flex flex-col justify-start items-start w-full">
        <h1>CalendarPage</h1>
        <Dashboard>
          <Suspense key={key}>
            <div className={`${isCalendar && 'flex flex-col-reverse justify-between'} h-full`}>
              {isCalendar && <CalendarFooter />}
              {children}
            </div>
          </Suspense>
        </Dashboard>
      </div>
    </div>
  );
}

function CalendarFooter() {
  return (
    <div className="grid grid-cols-4 text-center border-t border-accent px-4">
      <p className="py-2">1st period</p>
      <p className="border-x border-accent py-2">2nd period</p>
      <p className="border-x border-accent py-2">3rd period</p>
      <p className="py-2">4th period</p>
    </div>
  );
}
