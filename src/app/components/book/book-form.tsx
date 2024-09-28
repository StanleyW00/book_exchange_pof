"use client";

import React, { useState } from "react";

const BookForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <form
      className="border-2 border-blue-500 bg-zinc-800 p-6 rounded-lg max-w-md mx-auto flex flex-col"
      onSubmit={async (e) => {
        e.preventDefault();

        setLoading(true);

        const fields = {
          title: title,
          author: author,
          owner: owner,
        };

        const set = await fetch("/explore/stg/api/postBook", {
          method: "POST",
          body: JSON.stringify(fields),
        });

        const msg = await set.json();

        if (!set.ok) {
          setLoading(false);
          console.log(msg.message);
        } else {
          setLoading(false);
          setTitle("");
          setAuthor("");
          setOwner("");
        }
      }}
    >
      <div className="space-y-1">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full resize-none overflow-hidden rounded-lg border border-slate-700 bg-transparent p-3 text-sm text-slate-200 outline-none transition-all duration-100 focus:outline-none focus:ring"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="w-full resize-none overflow-hidden rounded-lg border border-slate-700 bg-transparent p-3 text-sm text-slate-200 outline-none transition-all duration-100 focus:outline-none focus:ring"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="owner">Owner:</label>
        <input
          type="text"
          id="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          required
          className="w-full resize-none overflow-hidden rounded-lg border border-slate-700 bg-transparent p-3 text-sm text-slate-200 outline-none transition-all duration-100 focus:outline-none focus:ring"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-4 rounded bg-zinc-400 px-10 py-2 text-white hover:bg-zinc-700"
      >
        Submit Book
      </button>
    </form>
  );
};

export default BookForm;
