import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        console.log("ca", credentials, "req.body", req.body);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// NextAuth(req: NextRequest, res: RouteHandlerContext, options: AuthOptions)
// NextAuth(req: NextApiRequest, res: NextApiResponse, options: AuthOptions)
// NextAuth(options: AuthOptions)
