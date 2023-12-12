"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink, Link } from "lucide-react";

const TouchScreenPage = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <Button
          className="w-fit mt-4"
          onClick={() => {
            window.open("https://shiply-touchscreen.vercel.app/", "_blank");
          }}
        >
          Open Our Touch Screen App <ExternalLink className="ml-2" size={24} />
        </Button>
        <iframe
          src="https://shiply-touchscreen.vercel.app/"
          width="800"
          height="1200"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default TouchScreenPage;
