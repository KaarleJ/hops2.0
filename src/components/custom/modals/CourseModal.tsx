"use client";

import { useState } from "react";
import { Button } from "../../ui/button";
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  ModalBody,
} from "../../ui/modal";
import { Course } from "../../../../types";
import { Form } from "@/components/ui/form";
import CourseFormFields from "../CourseFormFields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { courseFormSchema } from "@/schemas/courseSchema";
import { z } from "zod";
import { deleteCourse } from "@/actions";

interface CourseModalProps {
  course: Course;
  children?: React.ReactNode;
}

export default function CourseModal({ course, children }: CourseModalProps) {
  const [edit, setEdit] = useState(false);

  const form = useForm<z.infer<typeof courseFormSchema>>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      name: course.name,
      code: course.code,
      ects: course.ects.toString(),
      year: course.year.toString(),
      startPeriod: course.startPeriod.toString(),
      endPeriod: course.endPeriod.toString(),
    },
  });

  return (
    <Modal onOpenChange={() => setEdit(false)}>
      <ModalTrigger asChild className="hover:cursor-pointer">
        {children}
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{course.name}</ModalTitle>
          <ModalDescription>{course.code}</ModalDescription>
        </ModalHeader>
        <ModalBody>
          {edit ? (
            <Form {...form}>
              <form action={() => deleteCourse(course.id)} className="space-y-8">
                <CourseFormFields form={form} />
                <div className="flex flex-row justify-between">
                  <Button type="submit">Submit</Button>
                  <ModalClose>Cancel</ModalClose>
                </div>
              </form>
            </Form>
          ) : (
            <>
              <div className="py-4">
                <p>Year: {course.year}</p>
                <p>Start period: {course.startPeriod}</p>
                <p>End period: {course.endPeriod}</p>
              </div>
              <div className="py-4">
                <p>ECTS: {course.ects}</p>
                <p>
                  Length: {course.endPeriod - course.startPeriod + 1} periods
                </p>
              </div>
            </>
          )}
        </ModalBody>
        {!edit && (
          <div className="flex justify-between">
            <div className="flex">
              <Button onClick={() => setEdit(true)}>Edit</Button>
              <form className="ml-6" action={() => console.log("delete")}>
                <Button type="submit" variant="destructive">
                  Delete
                </Button>
              </form>
            </div>
            <ModalClose>Close</ModalClose>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
}
