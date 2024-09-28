import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { Book } from "@prisma/client";

export async function getBooks(): Promise<NextResponse<Book[]>> {
  let books: Book[] = [];

  books = await prisma.book.findMany();

  return NextResponse.json(books, {
    status: 200,
  });
}
