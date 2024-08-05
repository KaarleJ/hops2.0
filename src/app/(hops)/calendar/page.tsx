import Calendar from "@/components/custom/Calendar";
import { getCourses } from "@/actions";

export default async function CalendarPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const year = Number(searchParams.year) || new Date().getFullYear();
  const courses = await getCourses(year);

  return <Calendar courses={courses} />;
}
