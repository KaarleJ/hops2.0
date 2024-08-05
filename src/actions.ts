"use server";
import { Course as CourseType, FormCourse } from "../types";

const delay = () => new Promise((resolve) => setTimeout(resolve, 200));

export async function getCourses(year: number) {
  return courses.filter((course) => course.year === year);
}

export async function addCourse({
  name,
  code,
  ects,
  year,
  startPeriod,
  endPeriod,
}: FormCourse) {
  console.log("Adding course:", name, code, ects, year, startPeriod, endPeriod);
}

export async function updateCourse(course: CourseType) {
  await delay();
  console.log("Course updated:", course);
}

export async function deleteCourse(id: string) {
  await delay();
  console.log("Course deleted:", id);
}

const courses: CourseType[] = [
  {
    id: "1",
    name: "Math",
    year: 2024,
    code: "MATH101",
    ects: 5,
    startPeriod: 1,
    endPeriod: 1,
  },
  {
    id: "2",
    name: "Physics",
    year: 2024,
    code: "PHYS101",
    ects: 5,
    startPeriod: 3,
    endPeriod: 3,
  },
  {
    id: "3",
    name: "Chemistry",
    year: 2024,
    code: "CHEM101",
    ects: 5,
    startPeriod: 4,
    endPeriod: 4,
  },
  {
    id: "4",
    name: "Biology",
    year: 2024,
    code: "BIO101",
    ects: 5,
    startPeriod: 2,
    endPeriod: 2,
  },
  {
    id: "5",
    name: "Computer Science",
    year: 2024,
    code: "CS101",
    ects: 5,
    startPeriod: 3,
    endPeriod: 4,
  },
  {
    id: "6",
    name: "History",
    year: 2024,
    code: "HIST101",
    ects: 5,
    startPeriod: 1,
    endPeriod: 1,
  },
  {
    id: "7",
    name: "Geography",
    year: 2025,
    code: "GEOG101",
    ects: 5,
    startPeriod: 4,
    endPeriod: 4,
  },
  {
    id: "8",
    name: "Economics",
    year: 2025,
    code: "ECON101",
    ects: 5,
    startPeriod: 2,
    endPeriod: 2,
  },
  {
    id: "9",
    name: "Literature",
    year: 2025,
    code: "LIT101",
    ects: 5,
    startPeriod: 3,
    endPeriod: 3,
  },
  {
    id: "10",
    name: "Philosophy",
    year: 2025,
    code: "PHIL101",
    ects: 5,
    startPeriod: 1,
    endPeriod: 1,
  },
  {
    id: "11",
    name: "Psychology",
    year: 2021,
    code: "PSYCH101",
    ects: 5,
    startPeriod: 4,
    endPeriod: 4,
  },
  {
    id: "12",
    name: "Sociology",
    year: 2023,
    code: "SOC101",
    ects: 5,
    startPeriod: 2,
    endPeriod: 2,
  },
  {
    id: "13",
    name: "Art",
    year: 2023,
    code: "ART101",
    ects: 5,
    startPeriod: 3,
    endPeriod: 3,
  },
];
