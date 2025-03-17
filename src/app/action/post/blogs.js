"use server"

import { collectionObj, dbConnect } from "@/lib/dbConnect"


export const BlogsPost = async(blog) => {
    const blogCollection =await dbConnect(collectionObj.blogCollection)
    const result = await blogCollection.insertOne({blog})
    console.log("Save Post")
    return result
}