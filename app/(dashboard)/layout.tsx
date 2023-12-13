"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/side-bar";
import useClient from "@/hooks/client-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = useClient();
  const router = useRouter();

  useEffect(() => {
    if (!client.isLogged) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="h-full relative">
      <div className="h-full md:flex w-42 md:w-52 md:flex-col fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="pl-40 md:pl-56">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
