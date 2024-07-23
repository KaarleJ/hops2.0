import { Course } from "@/types/types";
import CourseButton from "./CourseButton";


export default function Calendar({ courses }: { courses: Course[]}) {
  return (
    <div className="grid grid-cols-4 grid-rows-6 auto-rows-max">
      {courses.map((course) => (
        <CourseButton course={course} key={course.id} />
      ))}
    </div>
  );
}