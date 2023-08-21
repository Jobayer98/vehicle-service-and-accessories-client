import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteFromCart: () => {},
  totalPrice: () => {},
});

export default CartContext;
