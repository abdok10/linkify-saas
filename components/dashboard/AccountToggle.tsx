import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import {
  CreditCard,
  LogOut,
  Plus,
  PlusCircle,
  Settings,
  User,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AccountToggle = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative flex items-center gap-4 rounded py-1 px-2 transition-colors hover:bg-zinc-700 cursor-pointer">
          <div className="flex gap-2 items-center">
            <img
              src="https://api.dicebear.com/9.x/notionists/svg"
              alt="avatar"
              className="size-8 shrink-0 rounded bg-violet-500 shadow"
            />
            <div className="text-start">
              <span className="block text-sm font-bold">Abdo Is Loading</span>
              <span className="block text-sm text-zinc-400">
                abdo@hover.dev
              </span>
            </div>
          </div>

          <div className="-space-y-1">
            <FiChevronDown className="rotate-180 text-sm" />
            <FiChevronUp className="rotate-180 text-sm" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountToggle;
