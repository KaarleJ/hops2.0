import { getCourses } from "@/db/db";

export default async function LoadView({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const year = Number(searchParams.year) || new Date().getFullYear();
  const courses = await getCourses(year);

  return <div>Loadview</div>;
}