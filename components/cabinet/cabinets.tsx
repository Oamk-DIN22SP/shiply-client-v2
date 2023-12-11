"use client";
import useLocation from "@/hooks/use-location";
import Locker from "./locker";
import CabinetStaticInfo from "./static-info";
import useCabinet from "@/hooks/use-cabinet";
import Panel from "../ui/panel";

const Cabinets = () => {
  const cabinetStore = useCabinet();
  const locationStore = useLocation();
  return (
    <div>
      <Panel
        title={
          locationStore.active?.title
            ? `${locationStore.active?.title.split(",")[0]}`
            : "Select Location"
        }
      >
        <CabinetStaticInfo />
        <div className="py-4 flex gap-4 flex-wrap items-center justify-center">
          {cabinetStore?.data?.map((cabinet) => (
            <Locker key={cabinet.id} cabinet={cabinet} />
          ))}
        </div>
      </Panel>
    </div>
  );
};

export default Cabinets;
