"use client";
import { toast } from "react-hot-toast";
import { useState } from "react";

import { Modal } from "@/components/ui/modal";
import { useNotificationModal } from "@/hooks/use-notification-modal";
import { Button } from "@/components/ui/button";

export const NotificationModal = () => {
  const notificationModal = useNotificationModal();
  const [loading, setLoading] = useState(false);

  const onAction = async (type: string) => {
    try {
      setLoading(true);
      // const response = await
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={notificationModal.data?.title || "Notification Details"}
      description={notificationModal.data?.subTitle || "Notification Details"}
      isOpen={notificationModal.isOpen}
      onClose={notificationModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
          <ul>
          <li className="py-2">
            <span className="font-semibold">Delivery number: </span>{" "}
            {notificationModal.data?.parcel.trackingNumber}
          </li>
          <li className="py-2">
            <span className="font-semibold">Drop-off point: </span>{" "}
            {notificationModal.data?.parcel.senderDropOffPoint}
          </li>
          <li className="py-2">
            <span className="font-semibold">Consigner: </span>{" "}
            {notificationModal.data?.parcel.senderName}
          </li>
          <li className="py-2">
            <span className="font-semibold">Consigner Address: </span>{" "}
            {notificationModal.data?.parcel.senderAddress}
          </li>
          <li className="py-2">
            <span className="font-semibold">Consigner number: </span>{" "}
            {notificationModal.data?.parcel.senderPhoneNumber}
          </li>
          <li className="py-2">
            <span className="font-semibold">Consignee: </span>{" "}
            {notificationModal.data?.parcel.receiverName}
          </li>
          <li className="py-2">
            <span className="font-semibold">Cabinet Number: </span>{" "}
            {notificationModal.data?.parcel.lockerNumber}
          </li>
          <li className="py-2">
            <span className="font-semibold">Password: </span> {notificationModal.data?.parcel.pinCode}
          </li>
        </ul>
          </div>
          {notificationModal.data?.actionText && (
            <div className="space-y-2">
              <div className="flex flex-col items-center justify-center gap-1">
                <Button
                  onClick={() => onAction(notificationModal.data?.status || "")}
                  disabled={loading}
                  className="w-fit mt-6 bg-[#42820F]"
                >
                  {notificationModal.data?.actionText}
                </Button>
                <small>{notificationModal.data?.smallText}</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
