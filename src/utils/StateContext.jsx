import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const StateContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    let newCart;
    if (existingProductIndex !== -1) {
      newCart = [...cart];
      newCart[existingProductIndex].quantity = 1; // Increment quantity
      toast.info("Product already added", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      if (newCart[existingProductIndex].quantity === 0) {
        // Remove product from cart when quantity reaches 0
        newCart = newCart.filter((p) => p.id !== product.id);
      }
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
  };
  const removeFromCart = (index) => {
    const newCart = cart.filter((p, i) => index !== i);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.error("Product removed from cart", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const addToWishlist = (product) => {
    const existingProductIndex = wishlist.findIndex((p) => p.id === product.id);
    let newWishlist;

    if (existingProductIndex !== -1) {
      // Remove product from wishlist
      newWishlist = wishlist.filter((p) => p.id !== product.id);
      toast.error("Product removed from wishlist", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // Add product to wishlist
      newWishlist = [...wishlist, { ...product, wishlist: true }];
      toast.success("Product added to the wishlist", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, wishlist, addToWishlist, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
