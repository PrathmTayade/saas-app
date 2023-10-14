import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const SignIn = async ({}) => {
  const session = await getServerSession(authOptions);
  
  console.log("session", session);

  return (
    <>
      {session ? (
        <Link
          href={"/api/auth/signout"}
          className={buttonVariants({ size: "sm", variant: "destructive" })}
        >
          Log out
        </Link>
      ) : (
        <Link
          href={"/api/auth/signin"}
          className={buttonVariants({ size: "sm", variant: "default" })}
        >
          Sign in
        </Link>
      )}
    </>
  );
};

export default SignIn;
