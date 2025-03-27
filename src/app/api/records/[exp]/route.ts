import { db } from "@/db";
import { students, studentsToWorkshops, workshops } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ exp: string }> },
) {
  const {exp} = await params;
  const registrarOfStudent = await db
    .select()
    .from(studentsToWorkshops)
    .innerJoin(students, eq(students.expediente, studentsToWorkshops.studentId))
    .innerJoin(workshops, eq(workshops.id, studentsToWorkshops.workshopId))
    .where(eq(studentsToWorkshops.studentId, parseInt(exp)))
  if (!registrarOfStudent[0]?.students) {
    return NextResponse.json({ error: "Student not found" }, { status: 404 });
  }
  const response = {
    exp: registrarOfStudent[0].students.expediente,
    workshops: registrarOfStudent.map((s) => s.workshops),
  }
  return NextResponse.json(response);
}
