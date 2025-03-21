import { MongoClient, ServerApiVersion } from "mongodb";

export default async function authDBConnect(collectionName: string) {
  const uri = process.env.MONGODB_URI!;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    return client.db(process.env.DB_NAME).collection(collectionName);
  } catch (error) {
    console.log(`DB Connection Error ${error}`);
    throw error; // Rethrow to handle in the caller
  }
}
