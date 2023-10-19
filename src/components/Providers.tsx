"use client";
import { trpc } from "@/app/_trpc/client";
import { getBaseUrl } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useState } from "react";

interface ProvidersProps {
  children: ReactNode;
  session: any;
}
const Providers = ({ children, session }: ProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: `${getBaseUrl()}/api/trpc` })],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>{children}</SessionProvider>;
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;
