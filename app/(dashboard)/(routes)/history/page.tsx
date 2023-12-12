import Container from "@/components/ui/container";
import Panel from "@/components/ui/panel";
import Notifications from "@/components/notifications/notifications";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const parcels = [
  {
    trackingNumber: "STN0011245554",
    status: "Delivered",
    sender: "John Doe",
    senderEmail: "john@gmail.com",
    receiver: "Jane Doe",
    receiverEmail: "jane@gmail.com",
    date: "12th Dec 2023",
  },
  {
    trackingNumber: "STN0011245555",
    status: "Reserved",
    sender: "Alice Smith",
    senderEmail: "alice@gmail.com",
    receiver: "Bob Johnson",
    receiverEmail: "bob@gmail.com",
    date: "13th Dec 2023",
  },
  {
    trackingNumber: "STN0011245556",
    status: "Sent",
    sender: "Charlie Brown",
    senderEmail: "charlie@gmail.com",
    receiver: "Lucy Williams",
    receiverEmail: "lucy@gmail.com",
    date: "14th Dec 2023",
  },
  {
    trackingNumber: "STN0011245557",
    status: "Received",
    sender: "David Miller",
    senderEmail: "david@gmail.com",
    receiver: "Emma Davis",
    receiverEmail: "emma@gmail.com",
    date: "15th Dec 2023",
  },
  {
    trackingNumber: "STN0011245558",
    status: "Delivered",
    sender: "Frank Johnson",
    senderEmail: "frank@gmail.com",
    receiver: "Grace Turner",
    receiverEmail: "grace@gmail.com",
    date: "16th Dec 2023",
  },
  {
    trackingNumber: "STN0011245559",
    status: "Reserved",
    sender: "Henry Adams",
    senderEmail: "henry@gmail.com",
    receiver: "Ivy Brown",
    receiverEmail: "ivy@gmail.com",
    date: "17th Dec 2023",
  },
];


export const revalidate = 0;
const HistoryPage = async () => {
  return (
    <Container>
      <div className="items-start justify-center gap-6 rounded-lg md:grid md:grid-cols-1 px-4">
        <Panel title="History of your recent activity">
          <Table>
            <TableCaption>A list of your recent activity.</TableCaption>
            <TableHeader className="font-semibold bg-orange-200">
              <TableRow>
                <TableHead>Tracking Number</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sender</TableHead>
                <TableHead>Sender Email</TableHead>
                <TableHead>Receiver</TableHead>
                <TableHead>Receiver Email</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parcels.map((parcel) => (
                <TableRow key={parcel.trackingNumber} className="hover:bg-slate-300 hover:cursor-pointer">
                  <TableCell className="font-medium">
                    {parcel.trackingNumber}
                  </TableCell>
                  <TableCell><Badge>{parcel.status}</Badge></TableCell>
                  <TableCell>{parcel.sender}</TableCell>
                  <TableCell>{parcel.senderEmail}</TableCell>
                  <TableCell>{parcel.receiver}</TableCell>
                  <TableCell>{parcel.receiverEmail}</TableCell>
                  <TableCell>{parcel.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
      </div>
    </Container>
  );
};

export default HistoryPage;
