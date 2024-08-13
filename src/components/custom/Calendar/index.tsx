import { Button } from "@/components/ui/button";
import { Course } from "../../../../types";
import DraggableCourse from "@/components/DraggableCourse";
import CourseModal from "../modals/CourseModal";
import DroppableColumns from "./DroppableColumns";

export default function Calendar({
  courses,
  show5th,
  drag,
}: {
  courses: Course[];
  show5th: boolean;
  drag: boolean;
}) {
  if (courses.length === 0) {
    return <p className="p-12">No courses added yet</p>;
  }

  return (
    <div
      data-show={show5th}
      className="grid grid-cols-4 data-[show=true]:grid-cols-5 grid-flow-row-dense gap-4 p-4 min-w-[50rem] md:min-w-min"
    >
      {courses.map((course) => {
        if (!show5th && course.startPeriod > 4) {
          return null;
        }

        if (drag) {
          return <DraggableCourse course={course} key={course.id} />;
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
      {drag && <DroppableColumns show5th={show5th}/>}
    </div>
  );
}
