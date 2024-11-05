"use client";
import Dashboard from "@/components/custom/Dashboard";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function CalendarPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const search = useSearchParams();
  const path = usePathname();
  const { data: session } = useSession();
  const show5th = search.get("show5th") === "true";

  const isCalendar = path === "/calendar";
  const key = JSON.stringify(Object.fromEntries(search.entries()));

  return (
    <div className="md:mt-24 flex flex-col items-center justify-start">
      <div className="md:px-28 py-5 md:py-24 flex flex-col justify-start items-start w-full">
        <h1>Calendar</h1>
        <Dashboard>
          <Suspense key={key}>
            <div
              className={`${
                isCalendar && "flex flex-col-reverse justify-between"
              } h-full overflow-x-scroll md:overflow-hidden overflow-y-auto`}
            >
              {isCalendar && <CalendarFooter show5th={show5th} />}
              {session ? (
                children
              ) : (
                <h3 className="p-6">
                  Start by{" "}
                  <Link href="/auth/signin" className="underline">
                    signin in
                  </Link>
                </h3>
              )}
            </div>
          </Suspense>
        </Dashboard>
      </div>
    </div>
  );
}

function CalendarFooter({ show5th }: { show5th?: boolean }) {
  return (
    <div
      data-show={show5th}
      className="grid grid-cols-4 border-t border-accent data-[show=true]:grid-cols-5 text-center w-full min-w-[50rem] md:min-w-min z-30 bg-background"
    >
      <p className="py-2">1st period</p>
      <p className="border-x border-accent py-2">2nd period</p>
      <p className="py-2">3rd period</p>
      <p className={`border-accent py-2 ${show5th ? "border-x" : "border-l"}`}>
        4th period
      </p>
      <p data-show={show5th} className={`py-2 ${!show5th && "hidden"}`}>
        5th period
      </p>
    </div>
  );
}
