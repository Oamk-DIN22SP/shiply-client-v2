import { create } from 'zustand';

import { Location } from '@/types';

interface LocationStore {
  data: Location[];
  setState: (state: Partial<LocationStore>) => void;
  active: Location | null;
  setActive: (location: Location) => void;
  findTitleById: (id: string, data:Location[]) => string;
}

const useLocation = create<LocationStore>((set) => ({
  data: [],
  setState: (state) => set(state),
  active: null,
  setActive: (location) => set(() => ({ active: location })),
  findTitleById: (id, data) => {
    const location = data.find((location) => location.id == id);
    console.log(id, data);
    return location?.title || '';
  },
}));

export default useLocation;