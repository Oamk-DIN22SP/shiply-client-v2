import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Client } from "@/types";

interface ClientStore {
  active: Client;
  isLogged: boolean;
  setActive: (client: Client) => void;
  setLogged: (isLogged: boolean) => void;
}

const useClient = create(
  persist<ClientStore>(
    (set) => ({
      active: {} as Client,
      isLogged: false,
      setActive: (client: Client) => set({ active: client }),
      setLogged: (isLogged: boolean) => set({ isLogged }),
    }),
    {
      name: "shiply-storage",
      storage: createJSONStorage(() => sessionStorage), 
      // (optional) by default, 'localStorage' is used
    }
  )
);

export default useClient;
