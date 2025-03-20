import { dbConnect } from "@/lib/dbConnect";

export default async function registerUser(
  email: string,
  password: string,
  name: string
) {
  const usersCollection = await dbConnect("users");
  const user = await usersCollection.findOne({ email });

  if (user) {
    throw new Error("User already exists");
  }

  const newUser = await usersCollection.insertOne({
    email,
    password,
    name,
  });

  return newUser;
}
