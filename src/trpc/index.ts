import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { publicProcedure, router } from "./trpc";
import { AuthOptions, Session } from "next-auth";
import { TRPCError } from "@trpc/server";
export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    // ? check if async works
    const session: Session | null = await getServerAuthSession();

    if (!session?.user?.email || !session?.user?.name) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized" });
    }
     
    // check if user is in db
    
    return { success: true };
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
