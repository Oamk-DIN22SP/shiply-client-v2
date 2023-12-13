import { cn, timeAgo } from "@/lib/utils";
import { Loader, Package, PackageCheck, PackageSearch, Truck } from "lucide-react";
import { Notification } from "@/types";
import { useNotificationModal } from "@/hooks/use-notification-modal";
import { getParcelByID } from "@/actions/parcels";
import toast from "react-hot-toast";
interface NotificationItemProps {
  notification: Notification;
}
const NotificatioItem: React.FC<NotificationItemProps> = ({ notification }) => {
  const notificationModal = useNotificationModal();
  const changeNotification = async (notification: Notification) => {
    if(notification.parcel_id){
      const parcel = await getParcelByID(notification.parcel_id);
      if(parcel.length > 0){
        if(notification?.status === 'reserved'){
          notificationModal.setData({
            title: "You send a new parcel",
            subTitle: "A Cabinet has been reserved for you, please go to the cabinet to drop off your parcel",
            status: notification?.status,
            parcel: parcel[0],
          });
        }
        if(notification?.status === 'sent'){
          notificationModal.setData({
            title: "Your parcel has been sent",
            subTitle: "Your parcel has been sent to the receiver",
            status: notification?.status,
            parcel: parcel[0],
          });
        }

        if(notification?.status === 'picked'){
          notificationModal.setData({
            title: "Your parcel has been picked",
            subTitle: "Your parcel has been picked up by the receiver",
            status: notification?.status,
            parcel: parcel[0],
          });
        }

        if(notification?.status === 'received'){
          notificationModal.setData({
            title: "Your parcel has been received",
            subTitle: "Your parcel has been received by the receiver",
            status: notification?.status,
            parcel: parcel[0],
          });
        }

        if(notification?.status === 'delivered'){
          notificationModal.setData({
            title: "Your parcel has been delivered",
            subTitle: "Your parcel has been delivered to the receiver",
            status: notification?.status,
            parcel: parcel[0],
          });
        }

        notificationModal.onOpen();
        
      }else {
        toast.error("Something went wrong");
      }
    }    
  };

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
      onClick={() => {
        changeNotification(notification);
      }}
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
      <p className="text-xs text-[#686868] ml-auto whitespace-nowrap w-fit">{timeAgo(notification.time)}</p>
    </div>
  );
};

export default NotificatioItem;
