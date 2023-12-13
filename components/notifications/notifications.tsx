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
  const [selectedCategory, setSelectedCategory] = useState<string>("all"); // Default category is 'all'
  const notificationStore = useNotification();
  const client = useClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notifications = await getAllNotification(
          client.active.clientEmail
        );
        notificationStore.setState({ data: notifications });
        setData(notifications);
        console.log(notificationStore.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter notifications based on the selected category
    const filteredData =
      selectedCategory === "all"
        ? notificationStore.data
        : notificationStore.data.filter(
            (notification) => notification.status === selectedCategory
          );

    setData(filteredData);
  }, [selectedCategory, notificationStore.data]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="py-4 px-4">
      <Select
        onValueChange={(value: string) => handleCategoryChange(value)}
        value={selectedCategory}
        defaultValue={"all"}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Notifications</SelectLabel>
            <SelectItem className="cursor-pointer" value="all">
              All
            </SelectItem>
            <SelectItem className="cursor-pointer" value="delivered">
              Delivered
            </SelectItem>
            <SelectItem className="cursor-pointer" value="received">
              Received
            </SelectItem>
            <SelectItem className="cursor-pointer" value="picked">
              Picked
            </SelectItem>
            <SelectItem className="cursor-pointer" value="sent">
              Sent
            </SelectItem>
            <SelectItem className="cursor-pointer" value="reserved">
              Reserved
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex flex-col gap-2 pt-4">
        {data.length ? (
          data.map((notification) => (
            <NotificatioItem
              key={notification.id}
              notification={notification}
            />
          ))
        ) : (
          <p>No notifications found.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
