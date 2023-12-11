"use client";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import useCabinet from "@/hooks/use-cabinet";
import toast from "react-hot-toast";
import useLocation from "@/hooks/use-location";
import useParcel from "@/hooks/use-parcels";
import parcelDrop from "@/actions/parcel-drop";

const PlacePercel = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const cabinetStore = useCabinet();
  const locationStore = useLocation();
  const parcelStore = useParcel();

  // search cabinetstore.data for cabinets with status to-be-delivered, get cabinets array
  const pendingDropOffParcels = parcelStore.data.filter(
    (parcel) => parcel.status === "picked"
  );

  const onSubmit = async () => {
    try {
      setLoading(true);
      if (!value) {
        toast.error("Please select a drop off point.");
        return;
      }
      const res = await parcelDrop(
        value.match(/\d+/)?.[0] || "",
        cabinetStore.activeCabinet.id,
        locationStore.active?.id || ""
      );

      if (res.parcel_id) {
        toast.success("Successfully verified drop off.");
        cabinetStore.setState({ state: "complete" });
        // find id in store data and update status
        cabinetStore.data.find((cabinet) => {
          if (cabinet.id === cabinetStore.activeCabinet?.id) {
            cabinet.status = "delivered";
          }
        });
      } else {
        console.log(res);
        toast.error(res.error);
      }
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  console.log("pendingDropOffParcels", pendingDropOffParcels);
  return (
    <div>
      <h1 className="text-[#4A4A4A] text-[23px] font-bold leading-8">
        Empty Cabinet
      </h1>
      <h2 className="text-[#686868] text-[16px] font-semibold leading-6">
        This is a representation of the stickers pasted to the parcels in the
        drivers inventory{" "}
        <span className="text-[12px]">
          (We imagine there are real boxes, driver looks at the boxes sticker and places it in the cabinet) 
        </span>
        .
      </h2>
      <div className="pt-14 px-12 flex flex-col justify-center items-center gap-4">
        <small className="text-[#42820F] font-bold -mb-2 text-left w-full">
          {
            value && "Tracking number: "+pendingDropOffParcels.find(
              (parcel) => parcel.parcelID.toString() === value.match(/\d+/)?.[0]
            )?.trackingNumber
          }
        </small>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              role="combobox"
              aria-expanded={open}
              className="flex items-center justify-between bg-transparent border border-[#42820F] rounded-sm py-2 text-[#4A4A4A] text-sm font-semibold leading-5 w-full"
            >
              {value || "Select Parcel Identity / Sticker"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 border border-[#42820F]">
            <Command>
              <CommandInput placeholder="Search parcel..." />
              <CommandEmpty>No Parcel found.</CommandEmpty>
              <CommandGroup>
                {pendingDropOffParcels.length === 0 && (
                  <CommandItem disabled>
                    Nothing to drop off at this location.
                  </CommandItem>
                )}
                {pendingDropOffParcels.map((item) => (
                  <CommandItem
                    key={item.parcelID}
                    value={item.parcelID}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value.match(/\d+/)?.[0] == item.parcelID ? "opacity-100" : "opacity-0"
                      )}
                    />
                    Parcel Identity / Sticker: {item.parcelID}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <small>
          {pendingDropOffParcels.length} parcel(s) to be dropped off at this location.
        </small>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Button
          onClick={onSubmit}
          disabled={loading}
          className="w-fit mt-6 bg-[#42820F]"
        >
          Drop & Lock Cabinet
        </Button>
        <small className="text-center py-4">
          This is a simulation of
          the driver dropping off a parcel at a location. The parcel is
          identified by the sticker on the parcel. The driver will scan the
          sticker and drop off the parcel at the location. The parcel will be
          locked in the cabinet and the receiver will be notified that the parcel
          has been dropped off (delivered)
        </small>
      </div>
    </div>
  );
};

export default PlacePercel;
