import { create } from 'zustand';

import { Parcel } from '@/types';

interface ParcelStore {
  data: Parcel[];
  setState: (state: Partial<ParcelStore>) => void;
}

const useParcel = create<ParcelStore>((set) => ({
  data: [],
  setState: (state) => set(state),
}));

export default useParcel;