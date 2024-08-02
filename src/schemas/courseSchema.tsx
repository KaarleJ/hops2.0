import { z } from 'zod';

export const courseSchema = z.object({
  name: z.string(),
  code: z.string(),
  ects: z.string().regex(/^[0-5]$/, 'Period must be between 0 and 5'),
  year: z.string().regex(/^[0-9]{4}$/, 'Year must be a number'),
  startPeriod: z.string().regex(/^[0-5]$/, 'Period must be between 0 and 5'),
  endPeriod: z.string().regex(/^[0-5]$/, 'Period must be between 0 and 5'),
})