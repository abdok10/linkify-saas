"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { RiHome3Fill } from "react-icons/ri";
import { FiDollarSign, FiLink, FiPaperclip, FiUsers } from "react-icons/fi";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: RiHome3Fill },
  { name: "Team", href: "/team", icon: FiUsers },
  { name: "Integrations", href: "/integrations", icon: FiPaperclip },
  { name: "Invoices", href: "/invoices", icon: FiLink },
  { name: "Finance", href: "/finance", icon: FiDollarSign },
];

const RouteSelect = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <main className="space-y-2 text-zinc-500">
      {navigation.map((nav) => (
        <Link
          href={nav.href}
          key={nav.name}
          className={`${
            pathname == nav.href
              ? "bg-white text-zinc-950 shadow dark:bg-zinc-200"
              : "hover:bg-zinc-200 hover:font-normal hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          } transition-all flex items-center gap-2  w-full rounded-md px-2 py-1`}
        >
          <span className={pathname == nav.href ? "text-zinc-700" : ""}>
            {<nav.icon />}
          </span>
          <span>{nav.name}</span>
        </Link>
      ))}
    </main>
  );
};

export default RouteSelect;
