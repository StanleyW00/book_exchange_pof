import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { bookId1, bookId2 }: { bookId1: string; bookId2: string } =
    await req.json();

  const set1 = await prisma.book.delete({
    where: {
      id: bookId1,
    },
  });

  if (!set1)
    return NextResponse.json(
      {
        message: "Error exchanging books. Please try again",
      },
      {
        status: 400,
      }
    );

  const set2 = await prisma.book.delete({
    where: {
      id: bookId2,
    },
  });

  if (!set2)
    return NextResponse.json(
      {
        message: "Error exchanging books. Please try again",
      },
      {
        status: 400,
      }
    );

  return NextResponse.json(
    {
      message: "Books successfully exchanged!",
    },
    {
      status: 200,
    }
  );
}
