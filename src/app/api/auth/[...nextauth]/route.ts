import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. "Sign in with...")
    //   name: "Credentials",
    //   // `credentials` is used to generate a form on the sign in page.
    //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "Cool email",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     const { email, password } = credentials ?? {};
    //     if (!email || !password) {
    //       throw new Error("Missing username or password");
    //     }
    //     const user = await prisma.User.findUnique({
    //       where: {
    //         email: email,
    //       },
    //     });
    //     // if user doesn't exist or password doesn't match
    //     if (!user || !(await compare(password, user.hashedPassword))) {
    //       throw new Error("Invalid username or password");
    //     }
    //     return user;
    //   },
    // }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  // TODO set up callbacks based on accounts providers to check for user or save it for both google and credentials
  // callbacks: {
  //   async session({ session, token }) {
  //     // session.user = token.user;
  //     return session;
  //   },
  //   async signIn({ user, account, profile, credentials }) {
  //     console.log(user, account, profile, credentials);
  //   },
  // },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
