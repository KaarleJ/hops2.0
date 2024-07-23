export interface Course {
  name: string;
  code: string;
  id: string;
  ects: number;
  year: number;
  startPeriod: Period;
  endPeriod: Period;
}

export type Period =  1 | 2 | 3 | 4 | 5;