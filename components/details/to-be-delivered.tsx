"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import useCabinet from "@/hooks/use-cabinet";
import { Dot } from "lucide-react";
import parcelPickUp from "@/actions/parcel-pick-up";
import toast from "react-hot-toast";
import useLocation from "@/hooks/use-location";

const ToBeDelivered = () => {
  const cabinetStore = useCabinet();
  const locationStore = useLocation();

  const onPickUp = async () => {
    const res = await parcelPickUp(
      cabinetStore.activeCabinet.id,
      cabinetStore.activeCabinet.parcel_id
    );
    console.log(1, res);
    if (res.parcel_id) {
      toast.success("Successfully verified drop off.");
      cabinetStore.setState({ state: "picked-up" });
      // find id in store data and update status
      cabinetStore.data.find((cabinet) => {
        if (cabinet.id === cabinetStore.activeCabinet.id) {
          cabinet.status = "empty";
        }
      });
    } else {
      console.log(res);
      toast.error(res.error);
    }
  };
  return (
    <>
      <div className="text-[#4A4A4A] text-[16px]">
        <h1 className="text-[23px] font-bold leading-8">To be delivered!</h1>
        <h2 className="font-normal leading-6">
          This parcel should be delivered to{" "}
          <span className="font-bold">{
            locationStore.findTitleById(
              cabinetStore.activeCabinet?.parcel_destination,
              locationStore.data
            )
          }</span>.
        </h2>
        <p className="py-4">Follow the instructions to complete: </p>
        <ul>
          <li className="py-1 font-semibold">
            - Pick the parcel from the cabinet and close the door{" "}
          </li>
          <li className="py-1 font-semibold">
            - Use the lock button to change the status
          </li>
          <li className="py-1 font-semibold">
            - Check the cabinet color from the system
          </li>
          <li className="py-1 font-semibold">
            - Deliver the parcel to related Locker center
          </li>
        </ul>
        <p className="p-8 pb-4 text-center">
          Once cabinet is locked cabinet color in system will change from red to
          green as below;
        </p>
        <Image
          src="/temp/to_be_delivered.png"
          alt="Empty Cabinet"
          width={214}
          height={40}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button onClick={onPickUp} className="w-fit mt-6 bg-[#872222]">
          Pick and Lock the cabinet
        </Button>
        <small>Finalise the delivery!.</small>
      </div>
    </>
  );
};

export default ToBeDelivered;
