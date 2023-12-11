import useLocation from "@/hooks/use-location";
import { cn } from "@/lib/utils";
import { Location } from "@/types";
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
        "flex flex-row gap-2 items-center hover:cursor-pointer hover:bg-[#fedbc28e] p-4 border rounded-sm",
        location?.id === locationStore.active?.id && "bg-[#FEDBC2]"
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
    </div>
  );
};

export default LocationItem;
