import { cn, timeAgo } from "@/lib/utils";
import { Loader, Package, PackageCheck, PackageSearch, Truck } from "lucide-react";
import { Notification } from "@/types";
interface NotificationItemProps {
  notification: Notification;
}
const NotificatioItem: React.FC<NotificationItemProps> = ({ notification }) => {

  // const changeNotification = async (notification: any) => {
  //   console.log(notification);
  // };

  // color based on status
  const color = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-[#FFECF5]";
      case "received":
        return "bg-[#D7FAD1]";
      default:
        return "bg-slate-100";
    }
  };

  return (
    <div
      className={cn(
        "flex flex-row gap-2 items-center hover:cursor-pointer hover:bg-[#D7FAD1] p-2 px-3 border rounded-sm", color(notification?.status))}
      // onClick={() => {
      //   changeNotification();
      // }}
    >
      <p className="text-center">
        {notification?.status === "delivered" ? <Truck /> : ""}
        {notification?.status === "received" ? <PackageCheck /> : ""}
        {notification?.status === "picked" ? <Package /> : ""}
        {notification?.status === "sent" ? <PackageSearch /> : ""}
        {notification?.status === "reserved" ? <Loader /> : ""}
      </p>
      <p className="text-sm">
        {notification?.title}
        <br />
      </p>
      <p className="text-xs text-[#686868] ml-auto">{timeAgo(notification.time)}</p>
    </div>
  );
};

export default NotificatioItem;
