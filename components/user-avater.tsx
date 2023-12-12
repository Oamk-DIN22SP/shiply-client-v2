"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useClient from "@/hooks/client-store";
import { Badge } from "./ui/badge";
const UserAvater = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const client = useClient();
  const notificationCount = 3;

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4 relative cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar>
              <AvatarImage src="/avater.png" alt="@shiply" />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {client.active?.clientName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {client.active?.clientEmail}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Notifications <Badge variant="destructive" className="w-1 h-4 ml-2 text-[12px] flex items-center justify-center">3</Badge>
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {notificationCount > 0 && (
        <div className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {notificationCount}
        </div>
      )}
    </div>
  );
};

export default UserAvater;
