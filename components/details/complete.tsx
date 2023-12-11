"use client";

import Image from "next/image";

const DeliveryComplete = () => {
  return (
    <>
      <div className="text-[#4A4A4A] text-[16px]">
        <h1 className="text-[23px] font-bold leading-8">Delivery Complete!</h1>

        <p className="py-6 font-semibold">
        Thank you for your exceptional service!  <br />
          <br />
          Your dedication and efficiency in completing this delivery successfully are truly appreciated. <br />
          <br />
          We are grateful for your hard work and look forward to continued success together. <br />
          <br />
          Safe travels on your next delivery!
        </p>
        <Image
          src="/temp/complete.png"
          alt="complete"
          width={280}
          height={280}
          className="mx-auto"
        />
      </div>
    </>
  );
};

export default DeliveryComplete;
