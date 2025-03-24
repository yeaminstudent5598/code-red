// "use server"

// import { collectionObj, dbConnect } from "@/lib/dbConnect"

// const getAllBlogs = async () => {
//     try {
//         const data = await dbConnect(collectionObj.blogCollection).find({}).toArray()
//         return data
//     } catch (err) {
//         console.log(err)
//         return []
//     }
// }

// export default getAllBlogs
"use server"

import { dbConnect, collectionObj } from "@/lib/dbConnect";

const getAllBlogs = async () => {
    try {
        // console.log("Fetching blogs from collection:", collectionObj.blogCollection);
        const collection = await dbConnect(collectionObj.blogCollection);
        // console.log("Collection object:", collection);
        const data = await collection.find({}).toArray();
        // console.log("Fetched data:", data);
        return data;
    } catch (err) {
        console.error("Error fetching blogs:", err); // Use console.error for visibility
        return [];
    }
}

export default getAllBlogs;

