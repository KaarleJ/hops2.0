import { Course } from "@/types/types";
import { Button } from "@/components/ui/button";

export default function Calendar({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return <p className="p-12">No courses added yet</p>;
  }

  return (
    <div className="grid grid-cols-4 grid-flow-row-dense gap-4 p-4">
      {courses.map((course) => {
        // We apply grid attributes by using style prop since tailwind has bugs with grid
        return (
          <Button
            style={{
              gridColumnStart: course.startPeriod,
              gridColumnEnd: course.endPeriod + 1,
            }}
            key={course.name}
          >
            {course.name} {course.startPeriod}-{course.endPeriod}
          </Button>
        );
      })}
    </div>
  );
}
