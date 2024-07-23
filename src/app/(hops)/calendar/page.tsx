import Calendar from "@/components/custom/Calendar";
import { getCourses } from "@/db/db";

export default async function CalendarPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const year = Number(searchParams.year) || new Date().getFullYear();
  const courses = await getCourses(year);

  return (
    <div className="p-2 border-l border-accent">
      <Calendar courses={courses} />
    </div>
  );
}
