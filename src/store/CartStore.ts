import { persist } from "zustand/middleware";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useFetchProducts } from "../services/DataProductsSevices";

type Item = {
  id?: number;
  title: string;
  value: number;
  description: string;
  srcImage: string;
  altImage: string;
  quantity: number;
  stock: number;
};

type CartStore = {
  products: Item[];
  cart: Item[];
  editId: number;
  setEditId: (id: number) => void;
  setProducts: (items: Item[]) => void;
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  setCart: (item: Item) => void;
};

const updateCard = (cart: Item[], product: Item, value: number) => {
  const tempProduct = cart.find((item) => item.id === product.id);

  if (value === -1 && product.quantity === 0)
    return { cart: cart.filter((item: Item) => item.id !== product.id) };

  if (tempProduct) {
    const tempCart = cart.map((cartItem: Item) => {
      if (cartItem.id === product.id) {
        return {
          ...cartItem,
          ...{ quantity: product.quantity },
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

const setItemCart = (cart: Item[], product: Item) => {
  const newCart = cart.map((item) => {
    if (item.id === product.id) item = product;
  });

  return { ...cart, cart: [...cart, product] };
};

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      editId: 0,
      cart: [],
      setEditId: (id) => set((state) => ({ editId: (state.editId = id) })),
      products: [],
      setCart: (item) => set((state) => setItemCart(state.cart, item)),
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
