import { authOptions } from "@/lib/auth";
import NextAuth, { getServerSession } from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
