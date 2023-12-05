import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { TRPCError, initTRPC } from "@trpc/server";
import { useSession } from "next-auth/react";
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
const middleware = t.middleware;
const isAuth = middleware(async (opts) => {
  const { status, data } = useSession();
  if (status === "unauthenticated") {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      user: data?.user,
      userId: data?.user.id,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
