import RouteSelect from "@/components/dashboard/RouteSelect";
import Search from "@/components/dashboard/Search";
import Plan from "@/components/dashboard/Plan";
import Link from "next/link";
import { Icons } from "@/components/global/Icons";

const Sidebar = () => {
  return (
    <main>
      <div className="sticky top-4 h-[calc(100vh-32px-48px)] overflow-y-scroll scrollbar-hide">
        <Link
          href="/home"
          className="flex gap-4 items-center justify-center py-4 border-b border-zinc-400 mb-4"
        >
          <Icons.logo className="size-10" />
          <span className="text-3xl font-bold font-heading !leading-none">
            Linkify
          </span>
        </Link>
        <Search />
        <RouteSelect />
      </div>

      <Plan />
    </main>
  );
};

export default Sidebar;
