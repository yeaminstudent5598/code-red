"use server"
import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { email: string } }) {
  try {
    const { email } = params;
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });
    const userCollection = await dbConnect(collectionObj?.userCollection)
    const result = await userCollection?.findOne({email})
    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}
