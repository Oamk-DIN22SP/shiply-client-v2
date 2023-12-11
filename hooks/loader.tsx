import { create } from 'zustand';

interface LoaderStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const useLoader = create<LoaderStore>((set) => ({
  loading: false,
  setLoading: (loading) => set(() => ({ loading })),
}));

export default useLoader;