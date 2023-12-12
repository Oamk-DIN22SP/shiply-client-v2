"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  status: string;
  onRefresh: () => void;
}

const ParcelTrackingDetails: React.FC<Props> = ({ status, onRefresh }) => {
  let title = "";
  let subTitle = "";
  const router = useRouter();
  switch (status) {
    case "reserved":
      title = "A cabinet is reserved for you";
      subTitle = "Please go to the cabinet and drop your parcel.";
      break;
    case "sent":
      title = "Driver is on the way!";
      subTitle = "Please wait for the driver to pick up your parcel.";
      break;
    case "picked":
      title = "Driver has picked up your parcel!";
      subTitle = "Your parcel is on the way to the receiver.";
      break;
    case "delivered":
      title = "Your delivery has been delivered!";
      subTitle = "Receiver will be notified.";
      break;
    case "received":
      title = "Your delivery has been received!";
      subTitle = "Thank you for using our service.";
      break;
    default:
      break;
  }

  return (
    <div className="p-8 bg-white rounded shadow-md">
      <div className="flex items-center mb-4">
        <h1 className={`font-bold text-2xl`}>{title}</h1>
      </div>
      <p className={`text-md`}>{subTitle}</p>
      <Image src="/demo.png" alt="parcel-tracking" width={360} height={360} />

      <Button className="w-fit mx-auto bg-[#BF5000]" onClick={onRefresh}>Track another parcel</Button>
    </div>
  );
};

export default ParcelTrackingDetails;
