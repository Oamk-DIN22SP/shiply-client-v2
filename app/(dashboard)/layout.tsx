"use client";
import Navbar from "@/components/navbar";
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
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="w-1/5 bg-gray-100 h-screen">side bar</div>
        <div className="w-4/5 bg-gray-50">{children}</div>
      </div>
    </>
  );
}
