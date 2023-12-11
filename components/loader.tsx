import Image from "next/image";

const Loader = () => {
  return (
    <div className="text-center py-10 -mt-10 flex justify-center items-center flex-col">
      <Image src="/loader.webp" alt="Loading..." width={250} height={250} />
      <p className="font-bold -mt-6">please wait ...</p>
    </div>
  );
};

export default Loader;
