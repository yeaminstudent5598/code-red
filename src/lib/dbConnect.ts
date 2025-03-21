import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionObj = {
  blogCollection: "blogs",
};
const uri = process.env.MONGODB_URI!;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function dbConnect(collectionName: string) {
  try {
    return client.db(process.env.DB_NAME).collection(collectionName);
  } catch (error) {
    console.log(`DB Connection Error ${error}`);
  }
}
