import { Icons } from "@/components/global/Icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[220px_1fr]">
      <aside className="pt-10 border-r border-zinc-700 px-5">
        <div className="flex gap-5 items-center">
          <Icons.logo className="size-10" />
          <Link href="/">
            <span className="text-xl font-bold font-heading !leading-none">
              Linkify
            </span>
          </Link>
        </div>
        <input
          type="text"
          className="w-full my-10 border border-zinc-700 rounded-md"
        />
        <div className="space-y-4">
          {["Dashboard", "Shorten URL", "QR Code", "Linktree"].map((link, id) => (
            <p
              key={id}
              className="w-full rounded-md bg-zinc-900 hover:bg-zinc-200 hover:text-zinc-900 font-semibold text-center py-2"
            >
              {link}
            </p>
          ))}
        </div>
      </aside>
      <div className="">
        <header className="border-b border-zinc-700 text-end py-3 pr-5">
          <Button>Dashboard</Button>
        </header>
        <section className="bg-zinc-900">{children}</section>
      </div>
    </div>
  );
};
export default DashboardLayout;
