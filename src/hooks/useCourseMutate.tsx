import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteCourse, updateCourse, addCourse } from "@/actions";
import { set, z } from "zod";
import { courseFormSchema } from "@/schemas/courseSchema";
import { Course } from "../../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useCourseMutate(course: Course) {
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onCreate(values: z.infer<typeof courseFormSchema>) {
    try {
      setLoading(true);
      await addCourse(values);
      setOpen(false);
      router.refresh();
      toast({
        title: `${values.code} ${values.name}`,
        description: "Course added!",
      });
      setLoading(false);
    } catch (error: any) {
      form.setError("root", {
        type: "manual",
        message: error.message,
      });
      setLoading(false);
    }
  }

  async function onUpdate(values: z.infer<typeof courseFormSchema>) {
    try {
      setLoading(true);
      await updateCourse(values, course.id);
      setOpen(false);
      setTimeout(() => setEdit(false), 100);
      router.refresh();
      toast({
        title: `${course.code} ${course.name}`,
        description: "Course updated!",
      });
      setLoading(false);
    } catch (error: any) {
      form.setError("root", {
        type: "manual",
        message: error.message,
      });
      toast({
        title: `${course.code} ${course.name} Error on update`,
        description: error.message,
      });
      setLoading(false);
    }
  }

  async function onDelete() {
    try {
      setLoading(true);
      await deleteCourse(course.id);
      setOpen(false);
      router.refresh();
      toast({
        title: `${course.code} ${course.name}`,
        description: "Course deleted!",
      });
      setLoading(false);
    } catch (error: any) {
      toast({
        title: `${course.code} ${course.name} Error on update`,
        description: error.message,
      });
      setLoading(false);
    }
  }

  async function toggleModal(open: boolean) {
    setOpen(open);
    setTimeout(() => setEdit(false), 100);
  }

  const form = useForm<z.infer<typeof courseFormSchema>>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      name: course.name,
      code: course.code as string | undefined,
      ects: course.ects.toString(),
      year: course.year.toString(),
      startPeriod: course.startPeriod.toString(),
      endPeriod: course.endPeriod.toString(),
    },
  });

  return { open, edit, setOpen, setEdit, loading, onUpdate, onDelete, onCreate, toggleModal, form };
}
