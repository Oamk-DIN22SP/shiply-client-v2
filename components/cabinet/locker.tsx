import useCabinet from "@/hooks/use-cabinet";
import { cn } from "@/lib/utils";
import { Cabinets } from "@/types";
import toast from "react-hot-toast";

interface LockerProps {
  cabinet: Cabinets;
}

const Locker: React.FC<LockerProps> = ({ cabinet }) => {
  const cabinetStore = useCabinet();

  const getStatusColor = (status: String) => {
    switch (status) {
      // 1. (initial) totally empty
      case "empty":
        return ["bg-[#D5F9B8]", "hover:bg-[#AEEEA0]"];
      // 2. percel created
      case "reserved":
        return ["bg-[#F3C1FE]", "hover:bg-[#D9A8E6]"];
      /* sender dropped off */
      // 3. driver picked up
      case "to-be-delivered":
        return ["bg-[#FAA6A6]", "hover:bg-[#E18383]"];
      // 4. driver dropped off
      case "delivered":
        return ["bg-[#F3C1FE]", "hover:bg-[#D9A8E6]"];
      /*  receiver picked up in touch screen */
      default:
        return ["", ""];
    }
  };

  const [bgColor, hoverColor] = getStatusColor(cabinet?.status);

  const onCabinetClick = () => {
    cabinetStore.setState({ activeCabinet: cabinet });

    const cabinetStatus = cabinet?.status;

    if (cabinetStatus === "delivered") {
      toast.error(
        "This locker is contains a parcel to be picked up by the receiver"
      );
      return;
    }

    if (cabinetStatus === "reserved") {
      toast.error("This locker is reserved for a sender to drop his parcel");
      return;
    }

    cabinetStore.setState({ state: cabinet?.status });
  };
  return (
    <div
      className={`w-[80px] h-[80px] bg-[#D5F9B8] flex items-center justify-center rounded hover:cursor-pointer font-bold ${bgColor} ${hoverColor}`}
      onClick={onCabinetClick}
    >
      {cabinet?.number}
    </div>
  );
};

export default Locker;
