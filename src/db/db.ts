import { JsonDB, Config } from 'node-json-db';
import { Course } from '@/types/types';

var db = new JsonDB(new Config("myDataBase", true, false, '/'));

export async function getCourses(year: number) {
  const allCourses = await db.getData('/courses') as Course[] | undefined;
  return allCourses?.filter(course => course.year === year) || [];
}

export async function getCourse(id: string) {
  return await db.getData(`/courses/${id}`) as Course | undefined;
}

export async function addCourse(course: Course) {
  db.push(`/courses/${course.id}`, course);
}

export async function updateCourse(course: Course) {
  db.push(`/courses/${course.id}`, course, false);
}