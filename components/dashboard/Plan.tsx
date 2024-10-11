import Link from "next/link";

const Plan = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-zinc-400 dark:text-zinc-50 justify-end text-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Enterprise</p>
          <p className="text-zinc-400">Pay as you go</p>
        </div> 

        <Link
          href="https://github.com/abdok10"
          target="_blank"
          className="px-2 py-1.5 font-medium bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 transition-colors rounded"
        >
          Support
        </Link>
      </div>
    </div>
  );
};

export default Plan;
