import authDBConnect from "@/lib/authDBConnect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("POST /api/register - antor");
  const { email, password } = await req.json();

  try {
    const collection = await authDBConnect("userData"); // Your collection name
    await collection.insertOne({ email, password }); // Hash password in production!
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(`DB Error ${error}`);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
