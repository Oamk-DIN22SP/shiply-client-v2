"use client";

import Image from "next/image";

const ReadyToPickUp = () => {
  return (
    <>
      <div className="text-[#4A4A4A] text-[16px]">
        <h1 className="text-[23px] font-bold leading-8">Ready for Pickup!</h1>
        <h2 className="font-semibold leading-6">
          This cabinet is full and waiting for consignee!
        </h2>
        <h2 className="font-semibold py-4 leading-6">
          Thanks to our exceptional drivers, this package was also set on time
          like all our deliveries.
        </h2>

        <p className="p-8 pb-4 text-center">
          Once parcel is picked up, cabinet color in system will change from
          lilac to green as below;
        </p>
        <Image
          src="/temp/ready_to_pickup.png"
          alt="Empty Cabinet"
          width={214}
          height={40}
          className="mx-auto"
        />
        <Image
          src="/temp/ready_to_pickup_boxes.png"
          alt="Empty Cabinet"
          width={307}
          height={222}
          className="mx-auto pt-6"
        />
      </div>
    </>
  );
};

export default ReadyToPickUp;
