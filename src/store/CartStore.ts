import { create } from "zustand";
import { ProductsDTO } from "../types/dto";

const initialItems: ProductsDTO[] = [];

type Item = {
  id: string;
  title: string;
  value: number;
  description: string;
  srcImage: string;
  altImage: string;
};

type CartStore = {
  products: Item[];
  cart: Item[];
  setProducts: (items: Item[]) => void;
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    products: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    setProducts: (products) => set(() => ({ products })),
  };
});
