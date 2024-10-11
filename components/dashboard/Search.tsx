"use client";

import { FiSearch } from "react-icons/fi";
import CommandMenu from "@/components/dashboard/CommandMenu";
import { useState } from "react";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mb-4 flex items-center rounded-md bg-zinc-200 dark:bg-zinc-800 px-2 py-2 text-sm">
      <FiSearch className="text-lg mr-2 text-zinc-500" />
      <input
        type="text"
        onFocus={(e) => {
          e.target.blur();
          setOpen(true);
        }}
        placeholder="Search..."
        className="w-full bg-transparent focus:outline-none"
      />
      <span className="rounded-md bg-white dark:bg-zinc-600 px-2">⌘K</span>
      <CommandMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Search;
