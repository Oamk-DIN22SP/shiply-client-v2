import useLocation from "@/hooks/use-location";
import { cn } from "@/lib/utils";
import { Location } from "@/types";
import { CheckCheck } from "lucide-react";
interface LocationItemProps {
  location: Location;
}
const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  const locationStore = useLocation();

  const changeLocation = async (location: Location) => {
    locationStore.setActive(location);
  };
  return (
    <div
      className={cn(
        "flex flex-row gap-2 items-center hover:cursor-pointer hover:bg-[#D7FAD1] px-4 py-2 border rounded-sm",
        location?.id === locationStore.active?.id && "bg-[#D7FAD1]"
      )}
      onClick={() => {
        changeLocation(location);
      }}
    >
      <p className="bg-[#686868] text-white w-8 text-center border rounded-sm text-sm h-7 flex justify-center items-center">
        {location?.id}
      </p>
      <p className="text-xs">
        {location?.title}
        <br />
        {location?.address}
      </p>
      {location?.id === locationStore.active?.id && <CheckCheck className="ml-auto text-green-600" />}
    </div>
  );
};

export default LocationItem;
