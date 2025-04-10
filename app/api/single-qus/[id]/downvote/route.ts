import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const p = await params;
    const questionCollection = dbConnect(collectionNameObj.questionCollection);
    const query = { _id: new ObjectId(p.id) };
    const singleQus = await questionCollection.findOne(query);
    return NextResponse.json(singleQus);
}

export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
    const p = await params;
    const questionCollection = dbConnect(collectionNameObj.questionCollection);
    const postId = new ObjectId(p.id);
    const body = await req.json();
    const userEmail = body.user;

    if (!userEmail) {
        return NextResponse.json({ message: "No user email provided" }, { status: 400 });
    }

    const post = await (await questionCollection).findOne({ _id: postId });
    if (!post) {
        return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    const alreadyDisliked = post.dislikes?.includes(userEmail);
    const updateDislikes = alreadyDisliked
        ? post.dislikes.filter((email: string) => email !== userEmail)
        : [...(post.dislikes || []), userEmail];

    const updateLikes = (post.likes || []).filter((email: string) => email !== userEmail); // <-- now `alreadyLiked` removed

    const updateRes = await (await questionCollection).updateOne(
        { _id: postId },
        { $set: { dislikes: updateDislikes, likes: updateLikes } }
    );

    return NextResponse.json({
        message: alreadyDisliked ? "Dislike removed" : "Dislike added",
        totalDislikes: updateDislikes.length,
        updateRes,
    });
}
