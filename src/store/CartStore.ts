import { persist } from "zustand/middleware";
import { create } from "zustand";

type Item = {
  id: number;
  title: string;
  value: number;
  description: string;
  srcImage: string;
  altImage: string;
  quantity?: number;
  total?: number;
};

const addFilter = (cart: any, product: any) => {
  const tempProduct = cart.find((item: any) => item.id === product.id);

  if (tempProduct) {
    const tempCart = cart.map((cartItem: Item) => {
      if (cartItem.id === product.id) {
        let newAmount: number = cartItem.value + product.value;

        return { ...cartItem, ...{ value: newAmount } };
      } else {
        return cartItem;
      }
    });

    return { ...cart, cart: tempCart };
  } else {
    return { ...cart, cart: [...cart, product] };
  }
};

type CartStore = {
  products: Item[];
  cart: Item[];
  setProducts: (items: Item[]) => void;
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      cart: [],
      products: [],
      addToCart: (item) => set((state) => addFilter(state.cart, item)),
      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      setProducts: (products) => set(() => ({ products })),
    }),
    {
      name: "cart store",
    }
  )
);
