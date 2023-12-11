"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  Download,
  History,
  ImageIcon,
  LayoutDashboard,
  LocateFixedIcon,
  Music,
  ScreenShare,
  Send,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const monstserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Send",
    icon: Send,
    href: "/send",
    color: "text-violet-500",
  },
  {
    label: "Receive",
    icon: Download,
    href: "/receive",
    color: "text-green-500",
  },
  {
    label: "Track",
    icon: LocateFixedIcon,
    href: "/track",
    color: "text-orange-500",
  },
  {
    label: "History",
    icon: History,
    href: "/history",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "TouchScreen",
    icon: ScreenShare,
    href: "/touchscreen",
    color: "text-green-700",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full text-white space-y-4 bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative">
            {/* <Image src="/logo.png" alt="logo" width={240} height={70} /> */}
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route, i) => (
            <Link
              href={route.href}
              key={i}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
