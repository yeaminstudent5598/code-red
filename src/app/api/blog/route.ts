"use server"

import { collectionObj, dbConnect } from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export async function GET () {
    const blogCollection = await dbConnect(collectionObj.blogCollection)
    const result = await blogCollection?.find().toArray()
    return NextResponse.json(result)
}
export async function POST (req:Request) {
    const data = await req.json()
    const blogCollection = await dbConnect(collectionObj.blogCollection)
    const result = await blogCollection?.insertOne(data)
    return NextResponse.json(result)
}
