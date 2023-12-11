"use client";

import Image from "next/image";

const PickedUp = () => {
  return (
    <>
      <div className="text-[#4A4A4A] text-[16px]">
        <h1 className="text-[23px] font-bold leading-8">Delivery Picked up!</h1>

        <p className="py-6 font-semibold">
          A new journey starts! <br />
          <br />
          Our system automatically detects the parcel that you picked. No need
          to worry about delivery numbers and passwords. <br />
          <br />
          Drop the package off at the relevant Locker center in an empty cabinet
          and follow the instructions. Our system will handle the rest. <br />
          <br />
          We wish you a pleasant journey!
        </p>
        <Image
          src="/temp/picked_up.png"
          alt="picked_up"
          width={240}
          height={240}
          className="mx-auto"
        />
      </div>
    </>
  );
};

export default PickedUp;
