"use client";

import { Book } from "@prisma/client";
import BookExchangeContainer from "./book-exchange-container";

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
