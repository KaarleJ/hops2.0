import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Course, FormCourse } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function parseFormCourse(course: Course): FormCourse {
  return {
    name: course.name,
    code: course.code as string | undefined,
    ects: course.ects.toString(),
    year: course.year.toString(),
    startPeriod: course.startPeriod.toString(),
    endPeriod: course.endPeriod.toString(),
  };
}

export function resolveYear(date: Date): number {
  const month = date.getMonth();
  const year = date.getFullYear();
  if (month < 8) {
    return year-1;
  } else {
    return year;
  }
}