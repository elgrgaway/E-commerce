/*eslint-disable */
import { useState, useEffect } from "react";

function ProductCard({ product }) {
  return (
    <div>
      <div className=" flex items-center justify-center bg-white">
        <img
          className=" w-[170px] object-cover"
          src={product.imageCover}
          alt="product image"
        />
      </div>
      <div>
        <h4>{product.title}</h4>
        <span className="text-[#DB4444] font-medium">${product.price}</span>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            <img src="star.png" alt="star icon" />
            {product.ratingsAverage}
          </span>
          <span className="text-[#808080] text-sm font-semibold">
            ({product.ratingsQuantity})
          </span>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
