"use client";
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
import useCourse from "@/hooks/useCourse";

export default function AddCourseForm({ year} : { year: number }) {
  const { open, setOpen, form, onSubmit } = useCourse(year);

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
