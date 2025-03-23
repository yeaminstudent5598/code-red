import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SignInInfo } from "../../../action/signin/signin";
import GoogleProvider from "next-auth/providers/google";
// import { signIn } from "next-auth/react";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      async authorize(credentials) {
        const user = await SignInInfo(credentials)
        if(user){
          return user
        }else{
          return null
        }

      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  pages: {
    signIn: '/signin',
  },
  // callbacks: {
  //   async signIn({user, account, profile, email, credentials}){
  //     console.log(account, user, credentials, email, profile, "hellow Dost")
  //   if(account){
  //     const {providerAccountId, providers} = account
  //     const {email, name} = user

  //   }

  //   }
  // }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
