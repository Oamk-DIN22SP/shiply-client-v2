"use client";
import Image from "next/image";
import { useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode; 
  }
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children
}) => {

  useEffect(() => {
    const storage = sessionStorage.getItem("shiply-storage");
    if (storage) {
      const client = JSON.parse(storage);
      if (client.state.isLogged) {
        window.location.href = "/";
      }
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