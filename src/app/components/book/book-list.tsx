"use client";

import { Book } from "@prisma/client";

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <ul role="list">
      {books?.map((book: Book) => (
        <li key={book.id}>
          {" "}
          {/* Wrap in <li> for list items */}
          {book.title} {/* Correctly interpolate the book title */}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
