"use client";
import { DndContext as Dcontext, DragOverEvent } from "@dnd-kit/core";
import { Course } from "../../../../types";
import { updateCourse } from "@/actions";
import { parseFormCourse } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function DndContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { toast } = useToast();

  function handleDragEnd(event: DragOverEvent) {
    const { active, over } = event;

    if (
      over &&
      over.data.current?.accepts.includes(active.data.current?.type)
    ) {
      const course = active.data.current?.course;
      const column = Number(over.data.current?.data.id);
      const difference = column - course.startPeriod;
      course.startPeriod += difference;
      course.endPeriod += difference;
      course.endPeriod > 5 && (course.endPeriod = 5);

      const formCourse = parseFormCourse(course);
      try {
        updateCourse(formCourse, course.id);
        toast({
          title: `${course.code} ${course.name}`,
          description: "Course moved succesfully",
        });
        router.refresh();
      } catch (error: any) {
        toast({
          title: `${course.code} ${course.name} Error on update`,
          description: error.message,
        });
        router.refresh();
      }
    }
  }

  return <Dcontext onDragEnd={handleDragEnd}>{children}</Dcontext>;
}
