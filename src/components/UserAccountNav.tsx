"use client";

import type { User } from "next-auth";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

type Props = {
  user: Pick<User, "name" | "image" | "email">;
};

const UserAccountNav = ({ user }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="dark:select-none dark:border-none">
        <UserAvatar
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-white dark:bg-gray-950 dark:border-sky-200 dark:shadow-[inset_0_0_2px_#fff,0_0_15px_#08f] mt-1"
        align="end"
      >
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700 dark:text-zinc-400">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator className=" dark:bg-gray-500" />
        <DropdownMenuItem asChild>
          <Link href="/">Meow</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className=" dark:bg-gray-500" />

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            signOut().catch(console.error);
          }}
          className="text-red-600 cursor-pointer"
        >
          Sign out
          <LogOut className="w-4 h-4 ml-2 " />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
