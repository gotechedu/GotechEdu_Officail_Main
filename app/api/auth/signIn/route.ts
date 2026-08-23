import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Sign in endpoint" });
}

export async function GET() {
  return NextResponse.json({ message: "Sign in endpoint" });
}
