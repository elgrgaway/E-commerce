/*eslint-disable */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
function ProductCard({ product, index, length = 56, best }) {
  return (
    <>
      {(index <= length - 1 || product.ratingsQuantity >= best) && (
        <div className="card">
          <div className="mb-4 relative flex items-center justify-center bg-[var(--bg-gray)] rounded">
            <img
              className="image w-[170px] object-cover"
              src={product.imageCover}
              alt="product image"
              loading="lazy"
            />
            <button className=" button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2  ">
              Add to cart
            </button>
          </div>
          <div>
            <Link>
              <h4 className=" transition-all  hover:text-[var(--red-color)]">
                {product.title.length <= 60
                  ? product.title
                  : product.title.slice(0, 60) + "...."}
              </h4>
            </Link>
            <span className="text-[#DB4444] font-medium my-2">
              ${product.price}
            </span>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <img loading="lazy" src="star.png" alt="star icon" />
                {product.ratingsAverage}
              </span>
              <span className="text-[#808080] text-sm font-semibold">
                ({product.ratingsQuantity})
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductCard;
