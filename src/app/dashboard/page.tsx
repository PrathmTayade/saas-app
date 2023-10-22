import { redirect } from "next/navigation";
import { trpc } from "../_trpc/client";
import { getServerAuthSession } from "../api/auth/[...nextauth]/route";
import Dashboard from "@/components/Dashboard";

const DashboardPage = async () => {
  const session = await getServerAuthSession();
  console.log("session in dashboardpage", session);

  return <>{!session?.user ? <div>login plz</div> : <Dashboard />}</>;
};

export default DashboardPage;
