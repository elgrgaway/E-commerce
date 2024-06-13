import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const StateContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    let newCart;

    if (existingProductIndex !== -1) {
      newCart = [...cart];
      newCart[existingProductIndex].quantity = 1;
      toast.success("Product already added", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
      toast.success("Product added to the cart", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Show toast notification
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
