"use client";

import useNotification from "@/hooks/notification";
import NotificatioItem from "./item";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useLoader from "@/hooks/loader";
import { useEffect, useState } from "react";
import Loader from "../loader";
import { getAllNotification } from "@/actions/notifications";
import useClient from "@/hooks/client-store";
import { Notification } from "@/types";

const Notifications = () => {
  const [data, setData] = useState([] as Notification[]);
  const notificationStore = useNotification();
  const client = useClient();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const notifications = await getAllNotification(client.active.clientEmail);
        notificationStore.setState({ data: notifications });
        setData(notifications);
        console.log(notificationStore.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-4 px-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Notifications</SelectLabel>
            <SelectItem className="cursor-pointer" value="all">All</SelectItem>
            <SelectItem className="cursor-pointer" value="delivered">Delivered</SelectItem>
            <SelectItem className="cursor-pointer" value="received">Received</SelectItem>
            <SelectItem className="cursor-pointer" value="picked">Picked</SelectItem>
            <SelectItem className="cursor-pointer" value="sent">Sent</SelectItem>
            <SelectItem className="cursor-pointer" value="reserved">Reserved</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex flex-col gap-2 pt-4">
        {data.map((notification) => (
          <NotificatioItem key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
