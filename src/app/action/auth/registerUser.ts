import { authDBConnect } from "@/lib/authDBConnect";

interface User {
  email: string;
  password: string;
}

export default async function registerUser(payload: User) {
  const usersCollection = await authDBConnect("userData");
  // const user = await usersCollection?.findOne({ email });

  // if (user) {
  //   throw new Error("User already exists");
  // }
  try {
    if (usersCollection) {
      const user = await usersCollection.insertOne(payload);
      return user;
    } else {
      console.log("Failed to connect to the database");
    }
  } catch (err) {
    console.log(err);
  }

  // const res = await usersCollection.insertOne(payload);
  // return res;
}
