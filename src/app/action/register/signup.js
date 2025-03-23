"use server";
import { collectionObj, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
export const SignUpUser = async (user) => {
  const { username, email, password } = user;
  const userCollection = await dbConnect(collectionObj.userCollection);

  const existUser = await userCollection.findOne({ email });
  const existUserName = await userCollection.findOne({ username });

  if (existUser) return { message: "User already exists" };
  if (existUserName)
    return {
      message: "Username already used, please provide a unique username",
    };

  const hashPassword = await bcrypt.hash(password, 10);
  user.password = hashPassword;
  await userCollection.insertOne(user);
  return { success: true, message: "User registered successfully" };
};
