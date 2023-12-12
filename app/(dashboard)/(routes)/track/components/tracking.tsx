"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { trackParcel } from "@/actions/parcels";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ParcelTrackingDetails from "./track-details";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [detailsState, setDetailsState] = useState(false);
  const [status, setStatus] = useState("");

  const startTracking = async () => {
    //validate tracking number
    if (!trackingNumber) {
      toast.error("Please enter a tracking number");
      return;
    }
    if (trackingNumber.length !== 15) {
      toast.error("Tracking number must be 15 digits (starting STNXXX...)");
      return;
    }
    //fetch the parcel
    const parcel = await trackParcel(trackingNumber);
    console.log(parcel);
    if (!parcel.length) {
      toast.error("Parcel not found");
    } else {
      setDetailsState(true);
      setStatus(parcel[0].status);
    }
  };

  if(detailsState) {
    return (
      <ParcelTrackingDetails status={status} onRefresh={
        () => {
          setDetailsState(false);
          setStatus("");
        }
      } />
    )
  }

  return (
    <div className="text-[#4A4A4A] text-[16px] px-4 py-2">
      <h1 className="text-[23px] font-bold leading-8">Track your delivery!</h1>
      <h2 className="font-normal leading-6">
        Your 10 digit delivery number is enough to know status of your delivery.
      </h2>
      <div className="pt-24 px-24 flex flex-col items-center">
        <Input
          type="text"
          className="w-full px-4 py-2 text-[#4A4A4A] border border-[#BF5000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#42820F] focus:border-transparent"
          placeholder="Delivery Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />

        <Button
          type="submit"
          className="w-fit px-6 py-2 mt-6 text-white rounded-lg bg-[#BF5000]"
          onClick={startTracking}
        >
          Track
        </Button>
      </div>
    </div>
  );
};

export default Tracking;
