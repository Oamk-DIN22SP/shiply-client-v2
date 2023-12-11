import { create } from 'zustand';

import { Parcel } from '@/types';

interface ParcelStore {
  activeId: string;
  data: Parcel[];
  setState: (state: Partial<ParcelStore>) => void;
}

const useParcel = create<ParcelStore>((set) => ({
  data: [],
  activeId: '',
  setState: (state) => set(state),
}));

export default useParcel;