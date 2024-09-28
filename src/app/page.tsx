import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-xl flex-col justify-center items-center text-center">
      <h1 className="font-heading text-[44px] font-bold leading-10 md:text-[60px] md:leading-[56px]">
        BookFellow
      </h1>
      <Link href="/explore">
        <button className="mt-4 rounded bg-zinc-400 px-10 py-2 text-white hover:bg-zinc-700">
          Get Started
        </button>
      </Link>
    </div>
  );
}
