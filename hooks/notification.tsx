import { Parcel } from "@/types";
import { create } from "zustand";
import { Notification } from "@/types";

interface NotificationStore {
  data: Notification[];
  setState: (state: Partial<NotificationStore>) => void;
  details: boolean;
  activeId: string;
  parcel: Parcel | null;
}

const useNotification = create<NotificationStore>((set) => ({
  data: [],
  setState: (state) => set(state),
  details: false,
  parcel: null,
  activeId: '',
}));

export default useNotification;
