// app/api/register/route.ts
import authDBConnect from "@/lib/authDBConnect";
import { NextResponse } from "next/server";

// async function authDBConnect(collectionName: string) {
//   const uri = process.env.MONGODB_URI!;
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });

//   try {
//     // await client.connect(); // Explicitly connect
//     return client.db(process.env.DB_NAME).collection(collectionName);
//   } catch (error) {
//     console.log(`DB Connection Error ${error}`);
//     throw error; // Rethrow to handle in the caller
//   } 
//   // finally {
//   //   await client.close(); // Always close the connection
//   // }
// }

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
