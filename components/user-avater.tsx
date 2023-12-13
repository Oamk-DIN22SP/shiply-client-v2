"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useClient from "@/hooks/client-store";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";
const UserAvater = () => {
  const [isMounted, setIsMounted] = useState(false);
  const client = useClient();
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const notificationCount = 3;

  if (!isMounted) {
    return null;
  }

  const handleLogout = () => {
    client.setLogged(false);
    client.setActive({} as any);
    sessionStorage.removeItem("shiply-storage");
    // if (typeof window !== "undefined") {
    //   sessionStorage.removeItem("shiply-storage");
    //   router.push("/login");
    // }
  };

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
            <DropdownMenuItem className="cursor-pointer" onClick={() => {
                router.push(`/`);
              }}>
              Notifications{" "}
              <Badge
                variant="destructive"
                className="w-1 h-4 ml-2 text-[12px] flex items-center justify-center"
              >
                3
              </Badge>
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                router.push(`/settings`);
              }}
            >
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
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
