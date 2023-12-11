"use client";

import React from "react";
import DeliveryComplete from "./complete";
import Empty from "./empty";
import EmptyLocker from "./empty-locker";
import PickedUp from "./picked-up";
import PlaceParcel from "./place-percel";
import ReadyToPickUp from "./ready-to-pickup";
import ToBeDelivered from "./to-be-delivered";
import useCabinet from "@/hooks/use-cabinet";
import Panel from "../ui/panel";

//type State = "empty" | "empty-locker" | "complete" | "ready-to-pickup" | "picked-up" | "to-be-delivered" | "place-percel";

let state: String = "empty-locker";

const Details = () => {
  let component;
  const cabinetStore = useCabinet();
  state = cabinetStore.state;

  switch (state) {
    case "initial":
      component = <Empty />;
      break;
    case "empty":
      component = <EmptyLocker />;
      break;
    case "complete":
      component = <DeliveryComplete />;
      break;
    case "ready-to-pickup":
      component = <ReadyToPickUp />;
      break;
    case "picked-up":
      component = <PickedUp />;
      break;
    case "to-be-delivered":
      component = <ToBeDelivered />;
      break;
    case "place-percel":
      component = <PlaceParcel />;
      break;
    default:
      component = <Empty />;
      break;
  }

  return <Panel title={
    cabinetStore.activeCabinet?.id
      ? `Selected Cabinet ${cabinetStore.activeCabinet?.number}`
      : "Select a Cabinet"
  }>{component}</Panel>;
};

export default Details;
