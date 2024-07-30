import { Course } from "@/types/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CourseList({
  courses,
}: {
  courses: Course[];
}) {
  return (
    <Table>
      {courses.length === 0 && (
        <TableCaption>No courses added yet</TableCaption>
      )}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Code</TableHead>
          <TableHead className="w-max">Name</TableHead>
          <TableHead className="w-[100px] text-center">Ects</TableHead>
          <TableHead className="w-[100px] text-center">Period</TableHead>
          <TableHead className="w-[100px] text-right">Length</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => {
          return (
            <TableRow key={course.id}>
              <TableCell>{course.code}</TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell className="text-center">{course.ects}</TableCell>
              <TableCell className="text-center">
                {course.startPeriod}
              </TableCell>
              <TableCell className="text-right">
                {course.endPeriod - course.startPeriod + 1}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}