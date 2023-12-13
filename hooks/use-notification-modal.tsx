import { create } from 'zustand';

interface useNotificationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: any;
  setData: (data: any) => void;
}

export const useNotificationModal = create<useNotificationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: null,
  setData: (data) => set({ data }),
}));
