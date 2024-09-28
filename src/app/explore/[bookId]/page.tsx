import BookListExchange from "@/app/components/book/book-list-exchange";
import { Book } from "@prisma/client";
import Link from "next/link";
import { getBooks } from "../../api/listBook/route";

export default async function ExchangePage({
  params,
}: {
  params: { bookId: string };
}) {
  const bookId = params.bookId;
  const response = await getBooks();
  const booksData: Book[] = await response.json();

  return (
    <div>
      <Link href="/explore">
        <button className="mt-4 rounded bg-zinc-400 px-10 py-2 text-white hover:bg-zinc-700">
          Go Back
        </button>
        <h2>Which book you want to exchange?</h2>
      </Link>
      <BookListExchange books={booksData} bookToExchange={bookId} />
    </div>
  );
}
