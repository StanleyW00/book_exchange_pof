import { Book } from "@prisma/client";
import Link from "next/link";

interface BookContainerProps {
  book: Book;
}

const BookContainer: React.FC<BookContainerProps> = ({ book }) => {
  return (
    <div className="border-2 border-white bg-zinc-900 p-6 rounded-lg max-w-md mx-auto flex flex-col mt-10">
      <div className="flex justify-between items-center mb-2">
        <p>
          &quot;{book.title}&quot; by {book.author}
        </p>
        {book.owner !== "current" && (
          <Link href={`/explore/${book.id}`}>
            <button className="mt-4 rounded bg-zinc-400 px-10 py-2 text-white hover:bg-zinc-700">
              Exchange
            </button>
          </Link>
        )}
      </div>
      <p>Owned by {book.owner}</p>
    </div>
  );
};

export default BookContainer;
