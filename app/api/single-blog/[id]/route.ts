<<<<<<< HEAD
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const blogCollection = dbConnect(collectionNameObj.blogCollection);
    const query = { _id: new ObjectId(params.id) };
    const singleBlog = await (await blogCollection).findOne(query);
    return NextResponse.json(singleBlog);
};

export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
    const blogCollection = dbConnect(collectionNameObj.blogCollection);
    const postId = new ObjectId(params.id);
    const body = await req.json();
    const userEmail = body.user;

    if (!userEmail) {
        return NextResponse.json({ message: "No user email provided" }, { status: 400 });
    }

    const post = await (await blogCollection).findOne({ _id: postId });

    if (!post) {
        return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    const alreadyLiked = post.likes?.includes(userEmail);

    let updateLikes = [...(post.likes || [])];
    let updateDislikes = [...(post.dislikes || [])];

    if (alreadyLiked) {
        updateLikes = updateLikes.filter((email) => email !== userEmail);
    } else {
        updateLikes.push(userEmail);
        updateDislikes = updateDislikes.filter((email) => email !== userEmail);
    }

    const updateRes = await (await blogCollection).updateOne(
        { _id: postId },
        { $set: { likes: updateLikes, dislikes: updateDislikes } }
    );

    return NextResponse.json({
        message: alreadyLiked ? "Like removed" : "Like added",
        totalLikes: updateLikes.length,
        updateRes
    });
};
=======
// import { PATCH } from './route';
import { authOptions } from "@/lib/authOptions"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"


export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const p = await params
    const blogCollection = dbConnect(collectionNameObj.blogCollection)
    const query = { _id: new ObjectId(p.id) }
    const singleBlog = await blogCollection.findOne(query)
    return NextResponse.json(singleBlog)
}

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    const p = await params;
    const query = { _id: new ObjectId(p.id) };
    const blogCollection = dbConnect(collectionNameObj.blogCollection);
    const currentBlog = await blogCollection.findOne(query)
    const session = await getServerSession(authOptions)
    const isOwnerOk = session?.user?.email === currentBlog?.email
    if (isOwnerOk) {
        const deleteBlog = await blogCollection.deleteOne(query)
        revalidatePath("/")
        return NextResponse.json(deleteBlog)
    } else {
        return NextResponse.json({ message: "You are not authorized to delete the question" }, { status: 401 })
    }
}


>>>>>>> d5cedd5f0af1a405386c387f8a750de4520869dc
