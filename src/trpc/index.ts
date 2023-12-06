import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";
import { z } from "zod";

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const session = await getServerAuthSession();

    if (!session?.user?.email || !session?.user?.name) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized" });
    }

    // check if user is in db

    return { success: true };
  }),
  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { user, userId } = ctx;

    return db.file.findMany({
      where: {
        userId,
      },
    });
  }),
  deleteFile: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { user, userId } = ctx;
      const file = await db.file.findFirst({ where: { id: input.id, userId } });
      if (!file) {
        throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
      }

      await db.file.delete({ where: { id: input.id } });

      return file
    }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
