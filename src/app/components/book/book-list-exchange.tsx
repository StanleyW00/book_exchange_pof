"use client";

import { Book } from "@prisma/client";
import BookExchangeContainer from "./book-exchange-container";
import { TriangleAlert } from "lucide-react";

interface BookListProps {
  books: Book[];
  bookToExchange: string;
}

const BookListExchange: React.FC<BookListProps> = ({
  books,
  bookToExchange,
}) => {
  const filteredBooks = books.filter((book: Book) =>
    book.owner.includes("current")
  );

  if (filteredBooks.length == 0) {
    return (
      <div className="mt-4 flex h-screen flex-col items-center justify-center">
        <TriangleAlert className="mb-2 h-20 w-20" />
        <p className="text-md mb-[560px] text-center font-heading md:mb-96 md:ml-3 md:text-2xl">
          No Books to Exchange
        </p>
      </div>
    );
  }

  return (
    <div>
      <ul role="list">
        {filteredBooks?.map((book: Book) => (
          <BookExchangeContainer
            key={book.id}
            book={book}
            bookToExchange={bookToExchange}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookListExchange;
