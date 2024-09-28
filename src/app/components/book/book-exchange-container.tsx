"use client";

import { Book } from "@prisma/client";
import { useState } from "react";
import LoadingDots from "../loading-dots";
import { useRouter } from "next/navigation";

interface BookContainerExchangeProps {
  book: Book;
  bookToExchange: string;
}

const BookExchangeContainer: React.FC<BookContainerExchangeProps> = ({
  book,
  bookToExchange,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="border-2 border-white bg-zinc-900 p-6 rounded-lg max-w-md mx-auto flex flex-col mt-10">
      <div className="flex justify-between items-center mb-2">
        <p>
          &quot;{book.title}&quot; by {book.author}
        </p>
        <button
          className="mt-4 rounded bg-zinc-400 px-10 py-2 text-white hover:bg-zinc-700"
          onClick={async (e) => {
            e.preventDefault();

            setLoading(true);

            const fields = {
              bookId1: book.id,
              bookId2: bookToExchange,
            };

            const set = await fetch("/api/exchange", {
              method: "POST",
              body: JSON.stringify(fields),
            });

            const msg = await set.json();
            if (!set.ok) {
              setLoading(false);
              console.log(msg.message);
            } else {
              setLoading(false);
              router.push("/explore");
            }
          }}
          disabled={loading}
        >
          {loading ? (
            <>
              <LoadingDots color="#FAFAFA" />
            </>
          ) : (
            "Select"
          )}
        </button>
      </div>
    </div>
  );
};

export default BookExchangeContainer;
