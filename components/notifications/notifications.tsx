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

const Notifications = () => {
  const data = [
    {
      id: 1,
      title: "Your package has been delivered",
      time: "2 hours ago",
      status: "delivered",
    },
    {
      id: 2,
      title: "Your package has been received",
      time: "2 hours ago",
      status: "received",
    },
    {
      id: 3,
      title: "Your package has been picked up",
      time: "2 hours ago",
      status: "picked",
    },
    {
      id: 4,
      title: "Your package has been sent",
      time: "2 hours ago",
      status: "sent",
    },
    {
      id: 5,
      title: "Your package has been reserved",
      time: "2 hours ago",
      status: "reserved",
    },
  ];

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
