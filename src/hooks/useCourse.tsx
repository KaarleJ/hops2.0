import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { addCourse } from "@/actions";
import { z } from "zod";
import { courseFormSchema } from "@/schemas/courseSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useCourse(year: number) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof courseFormSchema>>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      name: "",
      code: "",
      ects: "0",
      year: year.toString(),
      startPeriod: "1",
      endPeriod: "1",
    },
  });
  
  useEffect(() => {
    form.reset({
      name: "",
      code: "",
      ects: "0",
      year: year.toString(),
      startPeriod: "1",
      endPeriod: "1",
    });
  }, [year, form]);

  async function onSubmit(values: z.infer<typeof courseFormSchema>) {
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
  return { open, setOpen, loading, form, onSubmit };
}
