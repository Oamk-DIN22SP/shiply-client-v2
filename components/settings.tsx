"use client";
import { clientDelete } from "@/actions/client";
import { Button } from "./ui/button";
import { AlertModal } from "@/components/modals/alert-modal";
import useClient from "@/hooks/client-store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Settings = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onDelete = async () => {
    try {
      setLoading(true);
      const client = useClient();
      await clientDelete(client.active.clientEmail);
      client.setActive({} as any);
      client.setLogged(false);
      router.refresh();
      router.push(`/signup`);
      toast.success("Category deleted.");
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
