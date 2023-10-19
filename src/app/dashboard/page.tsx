import { getServerAuthSession } from "../api/auth/[...nextauth]/route";

const DashboardPage = async () => {
  const session = await getServerAuthSession();
  console.log(session);

  return (
    <div>
      <div> email : {session?.user?.email}</div>
      <div> username : {session?.user?.name}</div>
    </div>
  );
};

export default DashboardPage;
