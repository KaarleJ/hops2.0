import LoadView from "@/components/custom/Calendar/LoadView";
import { getCourses } from "@/db/db";

export default async function LoadViewPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const year = Number(searchParams.year) || new Date().getFullYear();
  const courses = await getCourses(year);

  return <LoadView courses={courses} />;
}