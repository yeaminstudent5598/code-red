import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const p = await params
    const questionCollection = dbConnect(collectionNameObj.questionCollection)
    const query = { _id: new ObjectId(p.id) }
    const singleQus = await questionCollection.findOne(query)
    return NextResponse.json(singleQus)
}

export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
    const p = await params
    const questionCollection = dbConnect(collectionNameObj.questionCollection)
    const postId = new ObjectId(p.id)
    const body = await req.json()
    const { userName, userEmail, userImage, comment } = body;
    if (!userEmail || !comment) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    const post = await (await questionCollection).findOne({ _id: postId })
    if (!post) {
        return NextResponse.json({ message: "Post not found" }, { status: 404 })
    }
    const newComment = {
        userName,
        userEmail,
        userImage,
        comment,
        createdAt: new Date(),
    };
    const updateComments = [...(post.comments || []), newComment]
    const updateRes = await (await questionCollection).updateOne(
        { _id: postId },
        { $set: { comments: updateComments } }
    )
    return NextResponse.json({
        message: "Comment added",
        updateRes,
    });
}