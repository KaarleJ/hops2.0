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
} from "../ui/modal";
import { Course } from "@/types/types";

interface CourseModalProps {
  course: Course;
  children?: React.ReactNode;
}

export default function CourseModal({ course, children }: CourseModalProps) {
  return (
    <Modal>
      <ModalTrigger asChild className="hover:cursor-pointer">
        {children}
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{course.name}</ModalTitle>
          <ModalDescription>{course.code}</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <div className="py-4">
            <p>Year: {course.year}</p>
            <p>Start period: {course.startPeriod}</p>
            <p>End period: {course.endPeriod}</p>
          </div>
          <div className="py-4">
            <p>ECTS: {course.ects}</p>
            <p>Length: {course.endPeriod - course.startPeriod + 1} periods</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalClose>Close</ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
