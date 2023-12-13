"use client";

import { Button } from "@/components/ui/button";
import { Parcel } from "@/types";
import { useRouter } from "next/navigation";
interface Props {
  parcel: Parcel;
  title: string;
  subTitle: string;
  smallText: string;
  actionText: string;
  action: () => void;
}
const CommonDetails: React.FC<Props> = ({ 
  parcel,
  title,
  subTitle,
  smallText,
  actionText,
  action
 }) => {
  const router = useRouter();
  const { 
    trackingNumber, 
    senderDropOffPoint, 
    senderName, 
    senderAddress, 
    senderPhoneNumber, 
    receiverName, 
    lockerNumber, 
    pinCode
   } = parcel;

  return (
    <>
      <div className="text-[#4A4A4A] text-[16px]">
        <h1 className="text-[23px] font-bold leading-8">
          {title}
        </h1>
        <h2 className="font-normal leading-6">
          {subTitle}
        </h2>
        <ul>
          <li className="py-2">
            <span className="font-semibold">Delivery number: </span>{" "}
            {trackingNumber}
          </li>
          <li className="py-2">
            <span className="font-semibold">Drop-off point: </span>{" "}
            {senderDropOffPoint}
          </li>
          <li className="py-2">
            <span className="font-semibold">Consigner: </span>{" "}
            {senderName}
          </li>
          <li className="py-2">
            <span className="font-semibold">Consigner Address: </span>{" "}
            {senderAddress}
          </li>
          <li className="py-2">
            <span className="font-semibold">Consigner number: </span>{" "}
            {senderPhoneNumber}
          </li>
          <li className="py-2">
            <span className="font-semibold">Consignee: </span>{" "}
            {receiverName}
          </li>
          <li className="py-2">
            <span className="font-semibold">Cabinet Number: </span>{" "}
            {lockerNumber}
          </li>
          <li className="py-2">
            <span className="font-semibold">Password: </span> {pinCode}
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button
          onClick={action}
          disabled={false}
          className="w-fit mt-6 bg-[#42820F]"
        >
          {actionText}
        </Button>
        <small>{smallText}</small>
      </div>
    </>
  );
};

export default CommonDetails;
