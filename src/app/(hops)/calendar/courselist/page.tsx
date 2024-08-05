import CourseList from "@/components/custom/Calendar/CourseList";
import { getCourses } from "@/actions";

export default async function CourseListPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const year = Number(searchParams.year) || new Date().getFullYear();
  const courses = await getCourses(year);

  return <CourseList courses={courses} />;
}