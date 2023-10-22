"use client";
import Link from "next/link";
import React, { use } from "react";
import { Button, buttonVariants } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/route";

const SignIn = ({}) => {
  const { data, status } = useSession();
  // const session = await  getServerAuthSession();

  console.log("session", data, status);
  const router = useRouter();
  return (
    <>
      {status === "authenticated" ? (
        <Button
          onClick={() => signOut({ callbackUrl: "/dashboard" })}
          variant={"ghost"}
          size={"sm"}
        >
          Log out
        </Button>
      ) : (
        //  Todo add user profile and image avatar and menu is possible too
        <Button
          // onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          onClick={() => router.push("api/auth/signin")}
          variant={"default"}
          size={"sm"}
        >
          Sign in
        </Button>
      )}
    </>
  );
};

export default SignIn;
