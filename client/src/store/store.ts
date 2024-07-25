import { create } from 'zustand';
import { Product } from '../types/types';

export type StoreBizStore = {
  cartItems: Product[];
  setCartItems: (cartItems: Product[]) => void;
};

const useStoreBizStore = create<StoreBizStore>((set) => ({
  cartItems: [],
  setCartItems: (cartItems: Product[]) => set({ cartItems }),
}));

export default useStoreBizStore;
