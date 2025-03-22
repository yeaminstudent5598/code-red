"use server"
import bcrypt from "bcryptjs";
import { collectionObj, dbConnect } from "@/lib/dbConnect";

export const SignInInfo = async (userInfo) => {
    const { email, password } = userInfo;
    
    const userCollection = await dbConnect(collectionObj.userCollection);
    const user = await userCollection.findOne({ email });
    if (!user) return null; 
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) return null; 

    return user; 
};
