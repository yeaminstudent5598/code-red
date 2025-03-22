import authDBConnect from "@/lib/authDBConnect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const collection = await authDBConnect("userData");
    const emailUsed = await collection.findOne({ email });

    if (emailUsed?.email === email) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 }
      );
    }

    await collection.insertOne({ email, password, role: "user" });
    return NextResponse.json(
      { message: "Sign up Success, Login fist  !!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(`DB Error ${error}`);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
