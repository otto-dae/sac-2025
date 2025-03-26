import { db } from "@/db";
import { students } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ exp: string }> },
) {
  try {
    const { exp } = await params;
    const studentQr = await db
      .select()
      .from(students)
      .where(eq(students.expediente, parseInt(exp)));
    if (studentQr.length === 0) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }
    const { expediente, lego_image, url_image } = studentQr[0];
    const response = {
      expediente: expediente,
      lego_image: lego_image,
      url_image: url_image,
    };
    return NextResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
export async function POST(
  request: Request,
  { params }: { params: Promise<{ exp: string }> },
) {
  try {
    const { exp } = await params;
    const examplePayload = {
      lego_image: "base64image",
    };
    const body = await request.json();
    const isNotValidImage =
      !body.lego_image || typeof body.lego_image !== "string";
    if (isNotValidImage) {
      return NextResponse.json(
        { error: "Field must be lego_image", example: examplePayload },
        { status: 401 },
      );
    }
    const studentAlreadyExists = await db
      .select()
      .from(students)
      .where(eq(students.expediente, parseInt(exp)))

    if (studentAlreadyExists.length === 0) {
      const studentQr = await db
        .insert(students)
        .values({
          expediente: parseInt(exp),
          url_image: body.url_image,
          lego_image: body.lego_image,
        });
      const response = {
        message: "Image uploaded",
        data: studentQr,
      };
      return NextResponse.json(response, { status: 201 });
    } else {
      const studentQr = await db
        .update(students)
        .set({
          lego_image: body.lego_image,
          url_image: body.url_image,
        })
        .where(eq(students.expediente, parseInt(exp)))
      const response = {
        message: "Image updated",
        data: studentQr,
      }
      return NextResponse.json(response, { status: 201 });
    }

  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
