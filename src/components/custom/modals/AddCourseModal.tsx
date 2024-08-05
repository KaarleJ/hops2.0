"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { courseFormSchema } from "@/schemas/courseSchema";

import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "../../ui/modal";
import { Form, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CourseFormFields from "../CourseFormFields";
import { addCourse } from "@/actions";
import { useState } from "react";

export default function AddCourseForm() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof courseFormSchema>>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      name: "",
      code: "",
      ects: "0",
      year: new Date().getFullYear().toString(),
      startPeriod: "1",
      endPeriod: "1",
    },
  });

  async function onSubmit(values: z.infer<typeof courseFormSchema>) {
    try {
      await addCourse(values);
      setOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        form.setError("root", {
          type: "manual",
          message: error.message,
        });
      }
    }
  }

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <Button size="mini">Add Course</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add course</ModalTitle>
          <ModalDescription>Add a new course to your HOPS</ModalDescription>
        </ModalHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CourseFormFields form={form} />
            <div className="flex flex-row justify-between">
              <Button type="submit">Submit</Button>
              <ModalClose>Cancel</ModalClose>
            </div>
            <FormMessage>{form.formState.errors.root?.message}</FormMessage>
          </form>
        </Form>
      </ModalContent>
    </Modal>
  );
}
