import { persist } from "zustand/middleware";
import { create } from "zustand";

type Item = {
  id: number;
  title: string;
  value: number;
  description: string;
  srcImage: string;
  altImage: string;
  quantity: number;
  stock: number;
};

const updateCard = (cart: any, product: Item, value: number) => {
  if (value === -1 && product.quantity === 0)
    return { cart: cart.filter((item: Item) => item.id !== product.id) };
  const tempProduct = cart.find((item: any) => item.id === product.id);

  if (tempProduct) {
    const tempCart = cart.map((cartItem: Item) => {
      if (cartItem.id === product.id) {
        return {
          ...cartItem,
          ...{ quantity: cartItem.quantity + value },
        };
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
  removeFromCart: (item: Item) => void;
};

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      cart: [],
      products: [],
      addToCart: (item) => set((state) => updateCard(state.cart, item, 1)),
      removeFromCart: (item) =>
        set((state) => updateCard(state.cart, item, -1)),
      setProducts: (products) => set(() => ({ products })),
    }),
    {
      name: "cart store",
    }
  )
);
