export interface Course {
  name: string;
  code: string | null | undefined;
  id: string;
  ects: number;
  year: number;
  startPeriod: number;
  endPeriod: number;
}

export interface FormCourse {
  name: string;
  code: string | undefined;
  ects: string;
  year: string;
  startPeriod: string;
  endPeriod: string;
}