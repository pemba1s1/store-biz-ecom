import { create } from 'zustand';
import { Product, ShippingFormInputs } from '../types/types';

export type StoreBizStore = {
  cartItems: Product[];
  setCartItems: (cartItems: Product[]) => void;
  shippingInformation: ShippingFormInputs;
  setShippingInformation: (shippingInformation: ShippingFormInputs) => void;
  cartTotal: string;
  setCartTotal: (cartTotal: string) => void;
};

const useStoreBizStore = create<StoreBizStore>((set) => ({
  cartItems: [],
  setCartItems: (cartItems: Product[]) => set({ cartItems }),
  shippingInformation: {
    fullName: "",
    email: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    country: ""
  },
  setShippingInformation: (shippingInformation: ShippingFormInputs) => set({ shippingInformation }),
  cartTotal: "",
  setCartTotal: (cartTotal: string) => set({ cartTotal }),
}));

export default useStoreBizStore;
