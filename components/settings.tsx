import { Button } from "./ui/button";

const Settings = () => {
  return (
    <>
      <div className="text-[#4A4A4A] text-[16px]">
        <h1 className="text-[23px] font-bold">
        Time is limited!
        </h1>
        <h2 className="font-normal">
        Of course there are a lot of settings should be included. Yet, we have limited time and compulsory requirements to fulfill. 
        </h2>
        <p className="text-md font-bold pt-12">Priorities :D</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button
          className="w-fit mt-6 bg-[#BF5000]"
        >
          Delete account
        </Button>
      </div>
    </>
  );
};

export default Settings;
