import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const isExist = cart.find((item) => item._id === id);
    if (isExist) {
      setCart(
        cart.map((item) =>
          item._id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item._id !== id));
    }
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const totalPrice = () => {
    let totalPrice = 0;
    cart.map((item) => (totalPrice += item.price * item.quantity));
    return Number(totalPrice.toFixed(2));
  };

  const cartInfo = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    deleteFromCart,
    totalPrice,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
