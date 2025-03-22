import authDBConnect from "@/lib/authDBConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          const collection = await authDBConnect("userData");
          const user = await collection.findOne({ email });
          const isPasswordValid = password == user.password;
          if (isPasswordValid) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(`DB Error ${error}`);
        }

      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
