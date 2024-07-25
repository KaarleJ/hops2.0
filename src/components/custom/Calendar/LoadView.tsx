"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Course } from "@/types/types";
import { Bar, BarChart } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const aggregateToPeriod = (courses: Course[], period: number) => {
  // filter courses that start on the given period, but do not span
  const initialCourses = courses.filter(
    (course) => course.startPeriod === period && course.endPeriod === period
  );
  // filter courses that span on that period
  const spanCourses = courses.filter(
    (course) =>
      course.startPeriod !== course.endPeriod &&
      course.startPeriod <= period &&
      course.endPeriod >= period
  );
  // Divide the ects of spanned courses by the number of periods they span
  const dividedCourses = spanCourses.map((course) => {
    return {
      ...course,
      ects: course.ects / (course.endPeriod - course.startPeriod + 1),
    };
  });
  // combine initial and divided courses
  const combinedCourses = [...initialCourses, ...dividedCourses];
  // Return the sum of the ects's
  return combinedCourses.reduce((acc, course) => acc + course.ects, 0);
};

export default function LoadView({ courses }: { courses: Course[] }) {
  const periods = [
    {
      name: "1",
      ects: aggregateToPeriod(courses, 1),
    },
    { name: "2", ects: aggregateToPeriod(courses, 2) },
    { name: "3", ects: aggregateToPeriod(courses, 3) },
    { name: "4", ects: aggregateToPeriod(courses, 4) },
  ];
  console.log(periods);
  return (
    <ChartContainer
      config={chartConfig}
      className="w-full h-full p-12 overflow-hidden"
    >
      <BarChart accessibilityLayer data={periods}>
        <Bar dataKey="ects" fill={chartConfig.desktop.color} radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
