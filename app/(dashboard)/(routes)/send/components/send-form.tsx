"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { clientRegister } from "@/actions/client";
import toast from "react-hot-toast";
import useClient from "@/hooks/client-store";
import Locations from "@/components/location/locations";
import useLocation from "@/hooks/use-location";
import { reserveByLocationId } from "@/actions/cabinets";
import { getParcelByID, sendParcel } from "@/actions/parcels";
import useCabinet from "@/hooks/use-cabinet";
import useParcel from "@/hooks/use-parcels";
import SendParcelDetails from "@/components/details/send-parcel-details";

const schema = z.object({
  senderName: z.string().min(3).max(100),
  senderEmailAddress: z.string().min(3).max(100),
  senderAddress: z.string().optional(),
  senderPhoneNumber: z.string().min(3).max(100),
  receiverName: z.string().min(3).max(100),
  receiverEmailAddress: z.string().email(),
  receiverAddress: z.string().optional(),
  receiverPhoneNumber: z.string().min(3).max(100),
  packageWidth: z.string().min(1),
  packageHeight: z.string().min(1),
  packageDepth: z.string().optional(),
  packageMass: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const SendForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const locationStore = useLocation();
  const client = useClient();
  const parcelStore = useParcel();

  const defaultValues: FormValues = {
    senderName: client.active.clientName,
    senderEmailAddress: client.active.clientEmail,
    senderAddress: "",
    senderPhoneNumber: "",
    receiverName: "",
    receiverEmailAddress: "",
    receiverAddress: "",
    receiverPhoneNumber: "",
    packageWidth: "",
    packageHeight: "",
    packageDepth: "",
    packageMass: "",
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  async function onSubmit(data: any) {
    try {
      setIsLoading(true);
      // reserve cabinet by location
      if (!locationStore.active?.id) {
        toast.error("Please select a location");
      } else {
        const response = await reserveByLocationId(locationStore.active?.id);
        if (response?.success) {
          const { cabinet_number, cabinet_id, location_id } = response;
          data.lockerID = cabinet_id;
          data.senderLocationId = location_id;
          data.lockerNumber = cabinet_number;
          data.senderID = client.active.clientId;
          data.senderDropOffPoint = locationStore.active?.title;
          // send package
          const res = await sendParcel(data);
          if (res?.success) {
            toast.success("Package sent successfully");
            const parcelData = await getParcelByID(res.parcelId);
            if (parcelData.length > 0) {
              parcelStore.setState({ data: parcelData });
              setStep(5);
            }
          } else {
            toast.error("Something went wrong");
          }
        } else {
          toast.error("Selected another location");
        }
      }
      // send package
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (step === 5 && parcelStore.data.length > 0) {
    return (
      <div className="px-4">
        <SendParcelDetails parcel={parcelStore.data[0]} />
      </div>
    );
  }

  return (
    <div className="px-4">
      <h1 className="text-[23px] font-bold leading-8">To send a package</h1>
      <h2 className="font-semibold leading-6">
        Please fill out the required information completely
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className="shadow-md px-2 py-4">
            <p className="text-center text-[18px] font-bold pb-2">
              {step === 1 && "Sender Information"}
              {step === 2 && "Receiver Information"}
              {step === 3 && "Package Information"}
              {step === 4 && "Choose drop off location"}
            </p>
            {step === 1 && (
              <div className="flex flex-col gap-2 py-4 px-2">
                <FormField
                  control={form.control}
                  name="senderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="senderEmailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="senderAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="senderPhoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-2 py-4 px-2">
                <FormField
                  control={form.control}
                  name="receiverName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="receiverEmailAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="receiverAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="receiverPhoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-2 py-4 px-2">
                <FormField
                  control={form.control}
                  name="packageWidth"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Width" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="packageHeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Height" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="packageDepth"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Depth (optional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="packageMass"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Mass (optional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {step === 4 && <Locations />}
          </div>
          <div className="flex justify-between">
            {step > 1 && (
              <Button
                disabled={isLoading}
                className="w-fit"
                type="button"
                onClick={() => setStep(step - 1)}
              >
                <ArrowLeft className="mr-2" /> Previous
              </Button>
            )}
            {step < 4 && (
              <Button
                disabled={isLoading}
                className="w-fit ml-auto"
                type={"button"}
                onClick={() => setStep(step + 1)}
              >
                Next <ArrowRight className="ml-2" />
              </Button>
            )}
            {step === 4 && (
              <Button className="w-fit ml-auto" type="submit" disabled={isLoading}>
                {
                  isLoading ? "Sending..." : "Send"
                } <Send className="ml-2" />
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SendForm;
