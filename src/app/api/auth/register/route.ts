import { db } from "@/lib/db";
import { hash } from "bcryptjs";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET(req: Request, res: Response) {
  return Response.json({ message: "Registration API" });
}

const registerUserSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Password should be minimum 5 characters"),
});

// TODO - complete the REGISTER API

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("request body", body);

  const { email, password } = registerUserSchema.parse(body);

  // const user = await db.user.findUnique({
  //   where: { email: email },
  // });

  // if (user) {
  //   return Response.json({
  //     message: "User already exists with this email",
  //   });
  // }

  const hashedPassword = await hash(password, 10);

  // const newUser = await db.user.create({
  //   data: { email, hashedPassword: hashedPassword },
  // });
  const newUser = { email, hashedPassword };

  return Response.json({
    user: newUser,
    message: "User registered successfully",
  });
}
