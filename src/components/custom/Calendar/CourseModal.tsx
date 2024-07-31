"use client";

import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalTrigger,
  ModalBody,
} from "../../ui/modal";
import { Course } from "@/types/types";

interface CourseModalProps {
  course: Course;
  children?: React.ReactNode;
}

export default function CourseModal({ course, children }: CourseModalProps) {
  return (
    <Modal>
      <ModalTrigger asChild>{children}</ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{course.name}</ModalTitle>
          <ModalDescription>{course.code}</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <p>Start period: {course.startPeriod}</p>
          <p>End period: {course.endPeriod}</p>
          <p>ECTS: {course.ects}</p>
          <p>Length: {course.endPeriod - course.startPeriod + 1} periods</p>
        </ModalBody>
        <ModalFooter>
          <ModalClose>Close</ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
