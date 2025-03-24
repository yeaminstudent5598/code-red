import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionObj = {
  blogCollection: "blogs",
  userCollection: "userData",
};
const uri = process.env.MONGODB_URI!;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  retryWrites: true,
});

// let cachedDb = null;
export async function dbConnect(collectionName: string) {
  // try {
  //   return client.db(process.env.DB_NAME).collection(collectionName);
  // } catch (error) {
  //   console.log(`DB Connection Error ${error}`);
  // }
  try {
    if (!collectionName) {
      throw new Error("Collection name is required");
    }
    if (!process.env.DB_NAME) {
      throw new Error("DB_NAME is not set in environment variables");
    }
    if (!uri) {
      throw new Error("MONGODB_URI is not set in environment variables");
    }
    console.log(`Connecting to MongoDB with URI: ${uri} and DB: ${process.env.DB_NAME}`);
    // if (cachedDb) {
    //   console.log(`Using cached DB for collection: ${collectionName}`);
    //   return cachedDb.collection(collectionName);
    // }
    console.log("Attempting to connect to MongoDB...");
    await client.connect();
    console.log("Connected successfully");
    const cachedDb = client.db(process.env.DB_NAME);
    const collection = cachedDb.collection(collectionName);
    console.log(`Returning collection: ${collectionName}`);
    return collection;
  } catch (err) {
    console.error(`DB Connection Error: ${err}`);
    throw err; // Ensure the error propagates
  }
}

