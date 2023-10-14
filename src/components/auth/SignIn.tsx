"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const SignIn = ({}) => {
  const { data, status } = useSession();

  console.log("session", data, status);

  return (
    <>
      {status === "authenticated" ? (
        <Button
          onClick={() => signOut({ callbackUrl: "/dashboard" })}
          variant={"default"}
          size={"sm"}
        >
          Log out
        </Button>
      ) : (
        //  Todo add user profile and image avatar and menu is possible too
        <Button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          variant={"ghost"}
          size={"sm"}
        >
          Sign in
        </Button>
      )}
    </>
  );
};

export default SignIn;
