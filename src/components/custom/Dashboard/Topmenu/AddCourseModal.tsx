"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { courseSchema } from "@/schemas/courseSchema";

import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "../../../ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddCourseForm() {
  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      name: "",
      code: "",
      ects: 0,
      year: new Date().getFullYear(),
      startPeriod: 1,
      endPeriod: 1,
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course name</FormLabel>
                  <FormControl>
                    <Input placeholder="Course name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course code</FormLabel>
                  <FormControl>
                    <Input placeholder="Course code..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row justify-between">
              <FormField
                control={form.control}
                name="ects"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ECTS</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="ects..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>year</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="year..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-row justify-between">
              <FormField
                control={form.control}
                name="startPeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Starting period</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Start period..."
                        min={1}
                        max={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endPeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ending period</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="End period"
                        min={1}
                        max={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
