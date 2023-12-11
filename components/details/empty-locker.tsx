"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import useCabinet from "@/hooks/use-cabinet";

const EmptyLocker = () => {
  const cabinetStore = useCabinet();
  return (
    <>
      <div className="text-[#4A4A4A] text-[16px]">
        <h1 className="text-[23px] font-bold leading-8">Empty Cabinet</h1>
        <h2 className="font-normal leading-6">
          This cabinet is ready for delivery.
        </h2>
        <p className="py-4">Follow the instructions to drop-off a package: </p>
        <ul>
          <li className="py-1 font-semibold">
            - Enter delivery number on the sticker of the parcel{" "}
          </li>
          <li className="py-1 font-semibold">
            - Place the parcel inside of cabinet and close the door{" "}
          </li>
          <li className="py-1 font-semibold">
            - Use the lock button to change status
          </li>
          <li className="py-1 font-semibold">
            - Check the cabinet color from the system
          </li>
        </ul>
        <p className="p-8 pb-4 text-center">
          Once cabinet is locked cabinet color in system will change from green
          to lilac as below;
        </p>
        <Image
          src="/temp/empty.png"
          alt="Empty Cabinet"
          width={214}
          height={40}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button
          onClick={() => {
            cabinetStore.setState({ state: "place-percel" });
          }}
          disabled={false}
          className="w-fit mt-6 bg-[#42820F]"
        >
          Proceed
        </Button>
        <small>Leads to boxes and delivery number input.</small>
      </div>
    </>
  );
};

export default EmptyLocker;
