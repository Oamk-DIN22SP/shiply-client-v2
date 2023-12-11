"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
const UserAvater = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const notificationCount = 3;

  if (!isMounted) {
    return null;
  }
  return ( 
    <div className="ml-auto flex items-center gap-x-4 relative cursor-pointer">
      <Image
        src="/avater.png"
        alt="Logo"
        width={50}
        height={50}
      />
      {notificationCount > 0 && (
        <div className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {notificationCount}
        </div>
      )}
    </div>
  );
}
 
export default UserAvater;