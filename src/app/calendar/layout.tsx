import Dashboard from "@/components/custom/Dashboard";

export default function CalendarPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-28 flex min-h-screen flex-col items-center justify-start">
      <div className="px-4 md:px-28 py-6 md:py-24 flex flex-col justify-start items-start w-full">
        <h1>CalendarPage</h1>
        <Dashboard>{children}</Dashboard>
      </div>
    </div>
  );
}
