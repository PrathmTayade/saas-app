import { trpc } from "../_trpc/client";
import { getServerAuthSession } from "../api/auth/[...nextauth]/route";

const DashboardPage = async () => {
  const session = await getServerAuthSession();
  console.log(session);

  
  //TODO continue from   https://youtu.be/ucX2zXAZ1I0?si=Cyz7qV56-GiDhlag&t=7354
  return (
    <div>
      <div> email : {session?.user?.email}</div>
      <div> username : {session?.user?.name}</div>
    </div>
  );
};

export default DashboardPage;
