import { create } from 'zustand';

import { Cabinets } from '@/types';

interface CabinetStore {
  data: Cabinets[];
  setState: (state: Partial<CabinetStore>) => void;
  state: String;
  activeCabinet: Cabinets;
}

const useCabinet = create<CabinetStore>((set) => ({
  data: [],
  setState: (state) => set(state),
  state: "initial",
  activeCabinet: {} as Cabinets,
}));

export default useCabinet;