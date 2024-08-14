"use client";
import { useDraggable } from "@dnd-kit/core";
import CourseModal from "./custom/modals/CourseModal";
import { Button } from "./ui/button";
import { Course } from "../../types";
import { Move } from "lucide-react";

export default function DraggableCourse({ course }: { course: Course }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: course.id.toString(),
    data: {
      type: "course",
      course,
    },
  });

  const style = transform
    ? {
        touchAction: "none",
        gridColumnStart: course.startPeriod,
        gridColumnEnd: course.endPeriod + 1,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <CourseModal course={course}>
      <Button
        size="dense"
        className="z-20"
        style={
          style
            ? style
            : {
                gridColumnStart: course.startPeriod,
                gridColumnEnd: course.endPeriod + 1,
                cursor: "move",
              }
        }
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <span className="mr-6 text-ellipsis overflow-hidden text-left w-full">
          {course.name}
        </span>
        {course.ects}
        <Move size={32} className="ml-3 text-accent" />
      </Button>
    </CourseModal>
  );
}
