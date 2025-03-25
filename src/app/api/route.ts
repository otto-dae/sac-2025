import { NextResponse } from "next/server";

export async function GET(){
  const response = {
    message: "API working"
  }
  return NextResponse.json(response, {status: 200})
}
