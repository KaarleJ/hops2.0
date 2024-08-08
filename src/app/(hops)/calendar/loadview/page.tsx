import LoadView from "@/components/custom/Calendar/LoadView";
import { getCourses } from "@/actions";

export default async function LoadViewPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const year = Number(searchParams.year) || new Date().getFullYear();
  const show5th = searchParams.show5th === "true";
  const courses = await getCourses(year);

  return <LoadView courses={courses} show5th={show5th} />;
}
