import { Course } from "@/types/types";

export default function CourseButton({ course }: { course: Course }) {
  return (
    <button className={`bg-primary text-white rounded-md p-2 m-1 col-start-${course.startPeriod} col-end-${course.endPeriod}`}>
      {course.name} {course.startPeriod}-{course.endPeriod}
    </button>
  );
}