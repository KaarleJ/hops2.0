"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Course } from "../../../../types";
import { Bar, BarChart, CartesianGrid, Label, XAxis, YAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#7c3aed",
  },
} satisfies ChartConfig;

// This function calculates the total ECTS load for a given period
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

export default function LoadView({
  courses,
  show5th,
}: {
  courses: Course[];
  show5th: boolean;
}) {
  const periods = [
    {
      name: "1",
      ects: aggregateToPeriod(courses, 1),
    },
    { name: "2", ects: aggregateToPeriod(courses, 2) },
    { name: "3", ects: aggregateToPeriod(courses, 3) },
    { name: "4", ects: aggregateToPeriod(courses, 4) },
  ];
  show5th && periods.push({ name: "5", ects: aggregateToPeriod(courses, 5) });
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[50px] w-full h-full"
      suppressHydrationWarning
    >
      <BarChart
        barCategoryGap={"30%"}
        margin={{ top: 50, bottom: 50 }}
        accessibilityLayer
        data={periods}
      >
        <CartesianGrid vertical={false} />
        <YAxis dataKey="ects" tickLine={false} tickMargin={10} axisLine={false}>
          <Label value="ECTS" position="left" angle={-90} offset={-20} />
        </YAxis>
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        >
          <Label value="Period" position="bottom" offset={10} />
        </XAxis>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="ects" fill={chartConfig.desktop.color} radius={8} />
      </BarChart>
    </ChartContainer>
  );
}
