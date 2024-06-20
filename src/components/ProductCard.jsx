/* eslint-disable */
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../utils/StateContext";
import "./ProductCard.css";

function ProductCard({ product, index, length = 56, best = 0 }) {
  const { addToCart, cart, wishlist, addToWishlist } = useContext(CartContext);
  const [productInCart, setProductInCart] = useState(false);
  const [productInWishlist, setProductInWishlist] = useState(false);

  useEffect(() => {
    const foundProduct = cart.find((p) => p.id === product.id);
    if (foundProduct) {
      setProductInCart(true);
    }
  }, [cart, product.id]);
  useEffect(() => {
    const foundProduct = wishlist.find((p) => p.id === product.id);
    if (foundProduct) {
      setProductInWishlist(true);
    } else {
      setProductInWishlist(false);
    }
  }, [wishlist, product.id]);

  if (product.rating < best || index > length) {
    return null;
  }

  return (
    <div className="card max-md:mb-10">
      <div className="mb-4 relative flex items-center justify-center bg-[var(--bg-gray)] rounded ">
        <img
          className="image w-[170px]"
          src={product.thumbnail}
          alt="product image"
          loading="lazy"
        />
        {productInWishlist ? (
          <button
            onClick={() => addToWishlist(product)}
            className=" absolute right-4 top-2.5  rounded-full bg-red-500 text-white transition-all "
          >
            <i className="fa-regular fa-heart  p-2.5 text-lg"></i>
          </button>
        ) : (
          <button
            onClick={() => addToWishlist(product)}
            className=" absolute right-4 top-2.5 bg-white rounded-full hover:bg-red-500 hover:text-white transition-all "
          >
            <i className="fa-regular fa-heart  p-2.5 text-lg"></i>
          </button>
        )}
        {productInCart ? (
          <Link
            to="/cart"
            className="button-addTocart absolute bottom-0 right-0 left-0 bg-green-400 text-white py-2 text-center"
          >
            Go to cart
          </Link>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2"
          >
            Add to cart
          </button>
        )}
      </div>
      <div>
        <Link to={`/all-products/${product.id}`}>
          <h4 className="transition-all hover:text-[var(--red-color)]">
            {product.title.length <= 60
              ? product.title
              : `${product.title.slice(0, 60)}....`}
          </h4>
        </Link>
        <span className="text-[#DB4444] font-medium my-2">
          ${product.price}
        </span>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            <img loading="lazy" src="star.png" alt="star icon" />
            {product.rating}
          </span>
          <span className="text-[#808080] text-sm font-semibold">
            ({product.reviews.length})
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
//################
