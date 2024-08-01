import { Course } from "@/types/types";
import { Button } from "@/components/ui/button";
import CourseModal from "../CourseModal";

export default function Calendar({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return <p className="p-12">No courses added yet</p>;
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="grid grid-cols-4 grid-flow-row-dense gap-4 p-4">
        {courses.map((course) => {
          // We apply grid attributes by using style prop since tailwind has bugs with grid
          return (
            <CourseModal course={course} key={course.name}>
              <Button
                style={{
                  gridColumnStart: course.startPeriod,
                  gridColumnEnd: course.endPeriod + 1,
                }}
              >
                <span className="mx-6">{course.name}</span> {course.ects} ECTS
              </Button>
            </CourseModal>
          );
        })}
      </div>
      <CalendarFooter />
    </div>
  );
}

function CalendarFooter() {
  return (
    <div className="grid grid-cols-4 text-center border-t border-accent px-4">
      <p className="py-2">1st period</p>
      <p className="border-x border-accent py-2">2nd period</p>
      <p className="border-x border-accent py-2">3rd period</p>
      <p className="py-2">4th period</p>
    </div>
  );
}
