import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { collectionNameObj } from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const collection = await dbConnect(collectionNameObj.profileCollection);
    const profile = await collection.findOne({ email: session.user.email });

    return new Response(JSON.stringify(profile || {}), { status: 200 });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const body = await req.json();
    console.log("Received profile data:", body);
    console.log("User Email:", session.user.email);

    const collection = await dbConnect(collectionNameObj.profileCollection);
    
    // Update or insert profile
    const result = await collection.updateOne(
      { email: session.user.email },
      {
        $set: {
          email: session.user.email,
          name: session.user.name,
          image: session.user.image,
          ...body,
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );

    console.log("MongoDB update result:", result);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error saving profile:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
} 