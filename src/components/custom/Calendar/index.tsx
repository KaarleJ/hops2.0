import { Course } from "../../../../types";
import { Button } from "@/components/ui/button";
import CourseModal from "../modals/CourseModal";

export default function Calendar({
  courses,
  show5th,
}: {
  courses: Course[];
  show5th: boolean;
}) {
  if (courses.length === 0) {
    return <p className="p-12">No courses added yet</p>;
  }

  return (
    <div
      data-show={show5th}
      className="grid grid-cols-4 data-[show=true]:grid-cols-5 transition-all duration-slowest ease grid-flow-row-dense gap-4 p-4"
    >
      {courses.map((course) => {
        if (!show5th && course.startPeriod > 4) {
          return null;
        }
        // We apply grid attributes by using style prop since tailwind has bugs with grid
        return (
          <CourseModal course={course} key={course.id}>
            <Button
              size="dense"
              className=""
              style={{
                gridColumnStart: course.startPeriod,
                gridColumnEnd: course.endPeriod + 1,
              }}
            >
              <span className="mr-6 text-ellipsis overflow-hidden text-left w-full">
                {course.name}
              </span>
              {course.ects}
            </Button>
          </CourseModal>
        );
      })}
    </div>
  );
}
