import { create } from 'zustand';

interface CabinetStore {
  lockerID: string;
  senderLocationId: string;
  cabinet_number: string;
  setState: (state: Partial<CabinetStore>) => void;
}

const useCabinet = create<CabinetStore>((set) => ({
  setState: (state) => set(state),
  lockerID: '',
  senderLocationId: '',
  cabinet_number: '',
}));

export default useCabinet;