"use client";

import { Book } from "@prisma/client";
import BookContainer from "./book-container";
import { useState } from "react";
import { Search } from "lucide-react";

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  const [filter, setFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredBooks = filter
    ? books.filter((book: Book) =>
        book.title.toLowerCase().includes(filter.toLowerCase())
      )
    : books;

  return (
    <div>
      <h2 className="font-heading text-[30px] font-bold leading-10 max-w-md mx-auto mt-10">
        Books
      </h2>
      <div className="max-w-md mx-auto">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setFilter(searchTerm);
          }}
          className="flex"
        >
          <input
            placeholder="Search By Title"
            type="text"
            id="title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full resize-none overflow-hidden rounded-lg border border-slate-700 bg-transparent p-3 text-sm text-slate-200 outline-none transition-all duration-100 focus:outline-none focus:ring"
          />
          <button type="submit" className="ml-5">
            <Search />
          </button>
        </form>
      </div>
      <ul role="list">
        {filteredBooks?.map((book: Book) => (
          <li key={book.id}>
            <BookContainer book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
