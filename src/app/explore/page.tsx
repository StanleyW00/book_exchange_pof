import { Book } from "@prisma/client";
import BookForm from "../components/book/book-form";
import BookList from "../components/book/book-list";
import { getBooks } from "../api/listBook/route";
// import { useState } from "react";

export default async function ExplorePage() {
  const response = await getBooks();
  const booksData: Book[] = await response.json();

  return (
    <div>
      <BookForm />
      <BookList books={booksData} />
    </div>
  );
}
