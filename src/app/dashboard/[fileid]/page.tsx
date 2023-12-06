import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: {
    fileid: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  // make db call
  const session = await getServerAuthSession();
  const user = session?.user;

  const file = await db.file.findUnique({
    where: { id: params.fileid, userId: user.id },
  });

  if (!file) notFound();

  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            {/* Main area */}
            {/* <PdfRenderer url={file.url} /> */}
            PDF
          </div>
        </div>

        <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          {/* <ChatWrapper isSubscribed={plan.isSubscribed} fileId={file.id} /> */}
        ChatWrapper

        </div>
      </div>
    </div>
  );
};

export default page;
