import { z } from "zod";

export const courseFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(255, "Name must be at most 255 characters"),
  code: z.string(),
  ects: z.string().regex(/^[0-5]$/, "Period must be between 0 and 5"),
  year: z.string().regex(/^[0-9]{4}$/, "Year must be a number"),
  startPeriod: z.string().regex(/^[0-5]$/, "Period must be between 0 and 5"),
  endPeriod: z.string().regex(/^[0-5]$/, "Period must be between 0 and 5"),
});

export const CourseSchema = z
  .object({
    name: z.string(),
    code: z.string(),
    ects: z.number(),
    year: z.number(),
    startPeriod: z.number().min(1).max(5),
    endPeriod: z.number().min(1).max(5),
  })
  .refine(
    (data) => data.startPeriod <= data.endPeriod,
    "Start period must be before end period"
  );
