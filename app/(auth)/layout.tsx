"use client";
import useClient from "@/hooks/client-store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode; 
  }
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children
}) => {
  const client = useClient();
  const router = useRouter();

  useEffect(() => {
    if (client.isLogged) {
      router.push("/");
    }
  }, []);
  return ( 
    <div className="bg-gray-200 h-screen flex items-center">
      <div className="min-w-[400px] mx-auto">
      <Image src="/logo.png" alt="logo" width="228" height="50" />
      {children}
      </div>
    </div>
   );
}
 
export default AuthLayout;