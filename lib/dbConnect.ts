

import { MongoClient, ServerApiVersion } from "mongodb"

export const collectionNameObj = {
    userCollection: "users",
    blogCollection: "blogs",
    questionCollection: "questions",

}

export default function dbConnect(collectionName: string) {//+
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("MONGODB_URI is not defined in the environment variables.");
    }
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return client.db(process.env.DB_NAME).collection(collectionName)
}
