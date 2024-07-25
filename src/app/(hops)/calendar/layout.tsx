"use client";
import Dashboard from "@/components/custom/Dashboard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function CalendarPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const search = useSearchParams();
  const key = JSON.stringify(Object.fromEntries(search.entries()));
  return (
    <div className="mt-28 flex min-h-screen flex-col items-center justify-start">
      <div className="px-4 md:px-28 py-6 md:py-24 flex flex-col justify-start items-start w-full">
        <h1>CalendarPage</h1>
        <Dashboard>
          <Suspense key={key}>
            {children}
          </Suspense>
        </Dashboard>
      </div>
    </div>
  );
}
