"use server"
import bcrypt from "bcryptjs";
import { collectionObj, dbConnect } from "@/lib/dbConnect";

export const SignInInfo = async (userInfo) => {
    const { email, password } = userInfo;
    
    const userCollection = await dbConnect(collectionObj.userCollection);
    const user = await userCollection.findOne({ email });
    console.log("click ha aha ah korcho------------------------>")
    if (!user) return null; // Return null if no user is found
console.log("click korcho------------------------>")
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid, "aschi?")

    if (!isPasswordValid) return null; // Return null if password is incorrect

    return user; // Return user if authentication is successful
};
