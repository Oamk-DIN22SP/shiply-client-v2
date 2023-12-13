"use client";
import Container from "@/components/ui/container";
import Panel from "@/components/ui/panel";
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
import { useEffect, useState } from "react";
import { parcelHistory } from "@/actions/parcels";
import { Parcel } from "@/types";
import useClient from "@/hooks/client-store";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const badgeColor = (status: string) => {
  switch (status) {
    case "sent":
      return "bg-blue-500";
    case "delivered":
      return "bg-green-500";
    case "picked":
      return "bg-yellow-500";
    case "received":
      return "bg-orange-500";
    case "reserved":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const HistoryPage = () => {
  const client = useClient();
  const [parcels, setParcels] = useState([] as Parcel[]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await parcelHistory(client.active.clientEmail);
        setParcels(res);
      } catch (error) {
        console.error("Error fetching parcels:", error);
      }
    };

    fetchData();
  }, [client.active.clientEmail]);

  return (
    <Container>
      <div className="items-start justify-center gap-6 rounded-lg md:grid md:grid-cols-1 px-4">
        <Panel title="History of your recent activity">
          {parcels.length > 0 ? ( 
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {parcels.map((parcel) => (
                  <TableRow
                    key={parcel.trackingNumber}
                    className="hover:bg-slate-300 hover:cursor-pointer"
                  >
                    <TableCell className="font-medium">
                      {parcel.trackingNumber}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${badgeColor(parcel.status)} text-white`}
                        
                      >{parcel.status.toUpperCase()}</Badge>
                    </TableCell>
                    <TableCell>{parcel.senderName}</TableCell>
                    <TableCell>{parcel.senderEmailAddress}</TableCell>
                    <TableCell>{parcel.receiverName}</TableCell>
                    <TableCell>{parcel.receiverEmailAddress}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center">
              <p className="text-lg font-semibold">
                You haven&apos;t sent / receive any parcel yet.
              </p>
              <p className="text-md font-normal">
                Send your first parcel now! <br />
                <Button
                  className="mt-4 bg-[#17a8b3]"
                  onClick={
                    () => router.push("/send")
                  }
                >
                  Send parcel <ExternalLink className="ml-2 inline-block" />
                </Button>
              </p>
            </div>
          )}
        </Panel>
      </div>
    </Container>
  );
};

export default HistoryPage;