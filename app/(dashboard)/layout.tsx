"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/side-bar";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const storage = sessionStorage.getItem("shiply-storage");
    if (storage) {
      const client = JSON.parse(storage);
      if (!client.state.isLogged) {
        window.location.href = "/login";
      }
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
