import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file');
    const type = formData.get('type');

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), { status: 400 });
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const base64String = Buffer.from(bytes).toString('base64');

    // Upload to ImageBB
    const imagebbFormData = new FormData();
    imagebbFormData.append('image', base64String);
    imagebbFormData.append('key', process.env.NEXT_PUBLIC_IMGBB_API_KEY);

    const response = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: imagebbFormData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error('Failed to upload image to ImageBB');
    }

    return new Response(JSON.stringify({ url: data.data.url }), { status: 200 });
  } catch (error) {
    console.error("Error uploading file:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
} 