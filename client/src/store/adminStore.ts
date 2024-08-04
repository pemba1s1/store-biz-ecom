
import { create } from 'zustand';

export type AdminStoreBizStore = {
  isAdmin: boolean;
  setIsAdmin: (cartItems: boolean) => void;
};

const useAdminStoreBizStore = create<AdminStoreBizStore>((set) => ({
  isAdmin: false,
  setIsAdmin: (isAdmin: boolean) => set({ isAdmin }),
}));

export default useAdminStoreBizStore;
