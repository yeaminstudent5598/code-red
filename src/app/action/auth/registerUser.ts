import { authDBConnect } from "@/lib/authDBConnect";

interface User {
  email: string;
  password: string;
  // name: string;
}

export default async function registerUser(payload: User) {
  const usersCollection = await authDBConnect("userData");
  // const user = await usersCollection?.findOne({ email });

  // if (user) {
  //   throw new Error("User already exists");
  // }

  const res = await usersCollection?.insertOne(payload);
  return res;
}
