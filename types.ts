export interface Course {
  name: string;
  code: string | undefined;
  id: string;
  ects: number;
  year: number;
  startPeriod: Period;
  endPeriod: Period;
}

export interface FormCourse {
  name: string;
  code: string | undefined;
  ects: string;
  year: string;
  startPeriod: string;
  endPeriod: string;
}

export type Period =  1 | 2 | 3 | 4 | 5;