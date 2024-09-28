import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    title,
    author,
    owner,
  }: { title: string; author: string; owner: string } = await req.json();

  const set = await prisma.book.create({
    data: {
      title: title,
      author: author,
      owner: owner,
    },
  });

  if (!set)
    return NextResponse.json(
      {
        message: "Error adding book. Please try again",
      },
      {
        status: 400,
      }
    );

  return NextResponse.json(
    {
      message: "Book successfully added!",
    },
    {
      status: 200,
    }
  );
}
