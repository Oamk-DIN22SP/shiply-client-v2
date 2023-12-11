"use client";

import { useEffect } from "react";
import useLocation from "@/hooks/use-location";
import getLocation from "@/actions/get-locations";
import LocationItem from "./item";
import getCabinets from "@/actions/client";
import useCabinet from "@/hooks/use-cabinet";
import useParcel from "@/hooks/use-parcels";
import getParcelsByLocation from "@/actions/parcels";
import useLoader from "@/hooks/loader";
import Loader from "../loader";

const Locations = () => {
  // hook to get data from store
  const locationStore = useLocation();
  const cabinetStore = useCabinet();
  const parcelStore = useParcel();
  const loaderStore = useLoader();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       loaderStore.setLoading(true);
  //       const locations = await getLocation();
  //       locationStore.setState({ data: locations });
  //       locationStore.setActive(locations[0]);
  //       const cabinets = await getCabinets(locations[0].id);
  //       cabinetStore.setState({ data: cabinets });
  //       const parcels = await getParcelsByLocation(locations[0].id);
  //       parcelStore.setState({ data: parcels });
  //     } catch (error) {
  //       console.error("Error fetching locations:", error);
  //     } finally {
  //       setTimeout(() => {
  //         loaderStore.setLoading(false);
  //       }, 1000);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (loaderStore.loading) {
    return (
      <div className="flex items-center my-10">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {!loaderStore.loading && locationStore?.data?.length > 0 ? (
        locationStore?.data?.map((location) => (
          <LocationItem key={location.id} location={location} />
        ))
      ) : (
        <div className="text-center py-20 flex">
          <h1 className="text-[23px] font-bold leading-8]">
            No locations found.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Locations;
