import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getSession } from "next-auth/react";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      <div> email : {session?.user?.email}</div>
      <div> username : {session?.user?.name}</div>
    </div>
  );
};

export default DashboardPage;
