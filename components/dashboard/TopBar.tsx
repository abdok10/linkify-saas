import AccountToggle from "@/components/dashboard/AccountToggle";

const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 py-2 border-zinc-400 dark:border-zinc-300">
      <div className="flex items-center justify-between p-1">
        <div>
          <span className="text-sm font-bold block">🚀 hey, Abdo!</span>
          <span className="text-sm block text-zinc-400">
            Tuesday, October 1st 2024
          </span>
        </div>

        <AccountToggle />
      </div>
    </div>
  );
};

export default TopBar;
