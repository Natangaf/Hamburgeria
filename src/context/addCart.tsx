import { createContext, ReactNode, useContext, useState } from "react";
import { IItemCart, ISection, IItem } from "../types/types";
import { database } from "../teste";

interface ChildrenProps {
  children: ReactNode;
}

interface IuseCartProvider {
  cart: IItemCart[];
  setCart: React.Dispatch<React.SetStateAction<IItemCart[]>>;
  deleteItenCart: (id: number) => void;
  addItenCart: (id: number, quantity: number) => void;
}

const CartContext = createContext<IuseCartProvider>({} as IuseCartProvider);

const CartProvider = ({ children }: ChildrenProps) => {
  const [cart, setCart] = useState<IItemCart[]>([]);

  const deleteItenCart = (id: number) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);
    setCart(updatedCart as IItemCart[]);
  };

  const addItenCart = (id: number, quantity: number) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === id);

    if (itemInCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      const item = database.sections
        .flatMap((section) => section.items)
        .find((item) => item.id === id);

      if (item) {
        setCart((prevCart) => [...prevCart, { ...item, quantity: quantity }]);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, deleteItenCart, addItenCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }

  return context;
};
