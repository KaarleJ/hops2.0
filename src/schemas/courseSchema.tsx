import { z } from 'zod';

export const courseSchema = z.object({
  name: z.string(),
  code: z.string(),
  ects: z.number(),
  year: z.number(),
  startPeriod: z.number().min(1).max(5),
  endPeriod: z.number().min(1).max(5),
})