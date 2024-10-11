import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccountToggle = () => {
  return (
    <div className="mb-4 mt-2 border-b border-zinc-300 dark:border-zinc-400 pb-4">
      <button className="relative flex w-full items-center gap-2 rounded p-1 transition-colors hover:bg-zinc-700">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="size-8 shrink-0 rounded bg-violet-500 shadow"
        />
        <div className="text-start">
          <span className="block text-sm font-bold">Abdo Is Loading</span>
          <span className="block text-sm text-zinc-400">abdo@hover.dev</span>
        </div>

        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-sm" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-sm" />
      </button>
    </div>
  );
};

export default AccountToggle;
