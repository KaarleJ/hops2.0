"use server";
import { getServerSession } from "next-auth";
import { FormCourse } from "../types";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "../auth.config";
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient();

export async function getCourses(year: number) {
  const session = await getServerSession(authOptions);
  try {
    const courses = await prisma.course.findMany({
      where: { year, authorId: session?.user?.id },
    });
    return courses;
  } finally {
    await prisma.$disconnect();
  }
}

export async function addCourse({
  name,
  code,
  ects,
  year,
  startPeriod,
  endPeriod,
}: FormCourse) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  try {
    return await prisma.course.create({
      data: {
        name,
        code,
        ects: parseInt(ects),
        year: parseInt(year),
        startPeriod: parseInt(startPeriod),
        endPeriod: parseInt(endPeriod),
        authorId: session.user.id,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateCourse(
  { name, code, ects, year, startPeriod, endPeriod }: FormCourse,
  id: string
) {
  const session = await getServerSession(authOptions);
  const dbCourse = await prisma.course.findUnique({
    where: { id },
  });

  if (!dbCourse || dbCourse.authorId !== session?.user.id) {
    throw new Error("Unauthorized");
  }

  try {
    return await prisma.course.update({
      where: { id },
      data: {
        name,
        code,
        ects: parseInt(ects),
        year: parseInt(year),
        startPeriod: parseInt(startPeriod),
        endPeriod: parseInt(endPeriod),
      },
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteCourse(id: string) {
  const session = await getServerSession(authOptions);
  const dbCourse = await prisma.course.findUnique({
    where: { id },
  });

  if (!dbCourse || dbCourse.authorId !== session?.user.id) {
    throw new Error("Unauthorized");
  }

  try {
    await prisma.course.delete({
      where: { id },
    });
    revalidatePath('/calendar')
  } finally {
    await prisma.$disconnect();
  }
}
