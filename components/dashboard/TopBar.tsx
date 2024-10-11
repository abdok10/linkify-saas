import { FiCalendar } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-zinc-400 dark:border-zinc-300">
      <div className="flex items-center justify-between p-1">
        <div>
          <span className="text-sm font-bold block">🚀 hey, Abdo!</span>
          <span className="text-sm block text-zinc-400">
            Tuesday, October 1st 2024
          </span>
        </div>

        <button className="flex text-sm items-center gap-2 bg-zinc-700 transition-colors hover:bg-zinc-800 hover:text- px-3 py-1.5 rounded">
          <FiCalendar />
          <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
