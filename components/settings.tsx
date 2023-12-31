"use client";
import { clientDelete } from "@/actions/client";
import { Button } from "./ui/button";
import { AlertModal } from "@/components/modals/alert-modal";
import useClient from "@/hooks/client-store";
import { useState } from "react";
import toast from "react-hot-toast";

const Settings = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const client = useClient();
  const onDelete = async () => {
    try {
      setLoading(true);
      await clientDelete(client.active.clientEmail);
      sessionStorage.removeItem("shiply-storage");
      toast.success("Account deleted.");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (error: any) {
      toast.error(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="text-[#4A4A4A] text-[16px]">
        <h1 className="text-[23px] font-bold">Time is limited!</h1>
        <h2 className="font-normal">
          Of course there are a lot of settings should be included. Yet, we have
          limited time and compulsory requirements to fulfill.
        </h2>
        <p className="text-md font-bold pt-12">Priorities :D</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button
          className="w-fit mt-6 bg-[#BF5000]"
          onClick={() => setOpen(true)}
        >
          Delete account
        </Button>
      </div>
    </>
  );
};

export default Settings;
