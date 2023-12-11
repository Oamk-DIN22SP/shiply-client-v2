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
      <div className="hidden h-full md:flex md:w-52 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
