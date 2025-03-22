import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SignInInfo } from "../../../action/signin/signin";
// import {SignInInfo} from "@/app/action/signin/signin"
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
          console.log("vaiya ami", user)
          return user
        }else{
          console.log("vaiya ami na")
          return null
        }

      },
    }),
  ],

  pages: {
    signIn: '/signin',
  }
  // callbacks: {
  //   async redirect({ baseUrl }) {
  //     return baseUrl
  //   },
  //   async session({ session, token }) {
  //     if (token) {
  //       session.user.email = token.email;
  //     }
  //     return session
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.email = user.email;
  //     }
  //     return token
  //   }
  // }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
