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
import { LoaderCircle } from "lucide-react";

export default function AddCourseForm({ year }: { year: number }) {
  const { open, setOpen, loading, form, onSubmit } = useCourse(year);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <Button size="mini" className="w-24">Add Course</Button>
      </ModalTrigger>
      <ModalContent className="p-4">
        <ModalHeader>
          <ModalTitle>Add course</ModalTitle>
          <ModalDescription>Add a new course to your HOPS</ModalDescription>
        </ModalHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CourseFormFields form={form} />
            <div className="flex flex-row justify-between">
              <div className="flex items-center">
                <Button type="submit" disabled={loading}>
                  Submit
                </Button>
                {loading && (
                  <LoaderCircle
                    className="animate-spin justify-self-start m-2"
                    size={24}
                  />
                )}
              </div>
              <ModalClose>Cancel</ModalClose>
            </div>
            <FormMessage>{form.formState.errors.root?.message}</FormMessage>
          </form>
        </Form>
      </ModalContent>
    </Modal>
  );
}
