"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { courseSchema } from "@/schemas/courseSchema";

import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "../../ui/modal";
import {
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CourseFormFields from "../CourseFormFields";

export default function AddCourseForm() {
  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      name: "",
      code: "",
      ects: "0",
      year: new Date().getFullYear().toString(),
      startPeriod: "1",
      endPeriod: "1",
    },
  });

  function onSubmit(values: z.infer<typeof courseSchema>) {
    console.log(values);
  }
  return (
    <Modal>
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
          </form>
        </Form>
      </ModalContent>
    </Modal>
  );
}
