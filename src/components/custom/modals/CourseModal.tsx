"use client";

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
import useCourse from "@/hooks/useCourseMutate";

interface CourseModalProps {
  course: Course;
  children?: React.ReactNode;
}

export default function CourseModal({ course, children }: CourseModalProps) {
  const { open, edit, setEdit, onUpdate, onDelete, toggleModal, form } = useCourse(course);

  return (
    <Modal
      open={open}
      onOpenChange={toggleModal}
    >
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
              <form
                onSubmit={form.handleSubmit(onUpdate)}
                className="space-y-8"
              >
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
              <Button onClick={onDelete} variant="destructive" className="ml-6">
                Delete
              </Button>
            </div>
            <ModalClose>Close</ModalClose>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
}
