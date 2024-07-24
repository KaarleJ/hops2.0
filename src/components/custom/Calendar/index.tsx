import { Course } from "@/types/types";
import { Button } from "@/components/ui/button";

export default function Calendar({ courses }: { courses: Course[] }) {
  return (
    <div className="grid grid-cols-4 grid-rows-5 grid-flow-row-dense gap-4 p-2">
      {courses.map((course) => {
        const span =
          course.endPeriod === course.startPeriod
            ? ""
            : `col-span-${course.endPeriod - course.startPeriod + 1}`;
        return (
          <Button
            className={`col-start-${course.startPeriod} ${span}`}
            key={course.id}
          >
            {course.name} {course.startPeriod}-{course.endPeriod}
          </Button>
        );
      })}
    </div>
  );
}
