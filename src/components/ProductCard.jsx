// // // /*eslint-disable */
// // // import { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import "./ProductCard.css";
// // // function ProductCard({ product, index, length = 56, best = 0 }) {
// // //   return (
// // //     <>
// // //       {product.rating >= best &&
// // //         (index <= length ? (
// // //           <div className="card">
// // //             <div className="mb-4 relative flex items-center justify-center bg-[var(--bg-gray)] rounded">
// // //               <img
// // //                 className="image w-[170px] "
// // //                 src={product.thumbnail}
// // //                 alt="product image"
// // //                 loading="lazy"
// // //               />
// // //               <button className=" button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2  ">
// // //                 Add to cart
// // //               </button>
// // //             </div>
// // //             <div>
// // //               <Link to={`/all-products/${product.id}`}>
// // //                 {" "}
// // //                 <h4 className=" transition-all  hover:text-[var(--red-color)]">
// // //                   {product.title.length <= 60
// // //                     ? product.title
// // //                     : product.title.slice(0, 60) + "...."}
// // //                 </h4>
// // //               </Link>
// // //               <span className="text-[#DB4444] font-medium my-2">
// // //                 ${product.price}
// // //               </span>
// // //               <div className="flex items-center gap-2">
// // //                 <span className="flex items-center gap-2">
// // //                   <img loading="lazy" src="star.png" alt="star icon" />
// // //                   {product.rating}
// // //                 </span>
// // //                 <span className="text-[#808080] text-sm font-semibold">
// // //                   ({product.reviews.length})
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           <div className="card">
// // //             <div className="mb-4 relative flex items-center justify-center bg-[var(--bg-gray)] rounded">
// // //               <img
// // //                 className="image w-[170px] "
// // //                 src={product.thumbnail}
// // //                 alt="product image"
// // //                 loading="lazy"
// // //               />
// // //               <button className=" button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2  ">
// // //                 Add to cart
// // //               </button>
// // //             </div>
// // //             <div>
// // //               <Link to={`/all-products/${product.id}`}>
// // //                 {" "}
// // //                 <h4 className=" transition-all  hover:text-[var(--red-color)]">
// // //                   {product.title.length <= 60
// // //                     ? product.title
// // //                     : product.title.slice(0, 60) + "...."}
// // //                 </h4>
// // //               </Link>
// // //               <span className="text-[#DB4444] font-medium my-2">
// // //                 ${product.price}
// // //               </span>
// // //               <div className="flex items-center gap-2">
// // //                 <span className="flex items-center gap-2">
// // //                   <img loading="lazy" src="star.png" alt="star icon" />
// // //                   {product.rating}
// // //                 </span>
// // //                 <span className="text-[#808080] text-sm font-semibold">
// // //                   ({product.reviews.length})
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //     </>
// // //   );
// // // }
// // // export default ProductCard;
// // /* eslint-disable */
// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import "./ProductCard.css";

// // function ProductCard({ product, index, length = 56, best = 0 }) {
// //   const [productQuantity, setProductQuantity] = useState(1);
// //   const handleAddToCart = () => {
// //     let productsDB = JSON.parse(localStorage.getItem("cart"));
// //     if (productsDB) {
// //       productsDB.push(product);
// //     } else {
// //       productsDB.map((pDB) => {
// //         pDB.id == product.id;
// //         setProductQuantity;
// //       });
// //       setProductQuantity(1);
// //       productsDB = [{ ...product, quantity: productQuantity }];
// //     }
// //     localStorage.setItem("cart", JSON.stringify(productsDB));
// //     // console.log(product.title);
// //   };
// //   return (
// //     <>
// //       {product.rating >= best && index <= length && (
// //         <div className="card">
// //           <div className="mb-4 relative flex items-center justify-center bg-[var(--bg-gray)] rounded">
// //             <img
// //               className="image w-[170px]"
// //               src={product.thumbnail}
// //               alt="product image"
// //               loading="lazy"
// //             />
// //             {productQuantity.quantity ? (
// //               <Link>Go to cart</Link>
// //             ) : (
// //               <button
// //                 onClick={handleAddToCart}
// //                 className="button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2"
// //               >
// //                 Add to cart
// //               </button>
// //             )}
// //           </div>
// //           <div>
// //             <Link to={`/all-products/${product.id}`}>
// //               <h4 className="transition-all hover:text-[var(--red-color)]">
// //                 {product.title.length <= 60
// //                   ? product.title
// //                   : product.title.slice(0, 60) + "...."}
// //               </h4>
// //             </Link>
// //             <span className="text-[#DB4444] font-medium my-2">
// //               ${product.price}
// //             </span>
// //             <div className="flex items-center gap-2">
// //               <span className="flex items-center gap-2">
// //                 <img loading="lazy" src="star.png" alt="star icon" />
// //                 {product.rating}
// //               </span>
// //               <span className="text-[#808080] text-sm font-semibold">
// //                 ({product.reviews.length})
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default ProductCard;
// /* eslint-disable */
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./ProductCard.css";

// function ProductCard({ product, index, length = 56, best = 0 }) {
//   const [productInCart, setProductInCart] = useState(false);

//   useEffect(() => {
//     const productsDB = JSON.parse(localStorage.getItem("cart")) || [];
//     const foundProduct = productsDB.find((p) => p.id === product.id);
//     if (foundProduct) {
//       setProductInCart(true);
//     }
//   }, [product.id]);

//   const handleAddToCart = () => {
//     let productsDB = JSON.parse(localStorage.getItem("cart")) || [];
//     const productIndex = productsDB.findIndex((p) => p.id === product.id);
//     if (productIndex !== -1) {
//       productsDB[productIndex].quantity += 1;
//     } else {
//       productsDB.push({ ...product, quantity: 1 });
//     }
//     localStorage.setItem("cart", JSON.stringify(productsDB));
//     setProductInCart(true);
//   };

//   return (
//     <>
//       {product.rating >= best && index <= length && (
//         <div className="card">
//           <div className="mb-4 relative flex items-center justify-center bg-[var(--bg-gray)] rounded">
//             <img
//               className="image w-[170px]"
//               src={product.thumbnail}
//               alt="product image"
//               loading="lazy"
//             />
//             {productInCart ? (
//               <Link
//                 to="/cart"
//                 className=" button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2 text-center"
//               >
//                 Go to cart
//               </Link>
//             ) : (
//               <button
//                 onClick={handleAddToCart}
//                 className="button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2"
//               >
//                 Add to cart
//               </button>
//             )}
//           </div>
//           <div>
//             <Link to={`/all-products/${product.id}`}>
//               <h4 className="transition-all hover:text-[var(--red-color)]">
//                 {product.title.length <= 60
//                   ? product.title
//                   : product.title.slice(0, 60) + "...."}
//               </h4>
//             </Link>
//             <span className="text-[#DB4444] font-medium my-2">
//               ${product.price}
//             </span>
//             <div className="flex items-center gap-2">
//               <span className="flex items-center gap-2">
//                 <img loading="lazy" src="star.png" alt="star icon" />
//                 {product.rating}
//               </span>
//               <span className="text-[#808080] text-sm font-semibold">
//                 ({product.reviews.length})
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default ProductCard;
/* eslint-disable */
//###############################################
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./ProductCard.css";

// function ProductCard({ product, index, length = 56, best = 0 }) {
//   const [productInCart, setProductInCart] = useState(false);

//   useEffect(() => {
//     const productsDB = JSON.parse(localStorage.getItem("cart")) || [];
//     const foundProduct = productsDB.find((p) => p.id === product.id);
//     if (foundProduct) {
//       setProductInCart(true);
//     }
//   }, [product.id]);

//   const handleAddToCart = () => {
//     let productsDB = JSON.parse(localStorage.getItem("cart")) || [];
//     const productIndex = productsDB.findIndex((p) => p.id === product.id);
//     location.reload();
//     if (productIndex !== -1) {
//       productsDB[productIndex].quantity += 1;
//     } else {
//       productsDB.push({ ...product, quantity: 1 });
//     }
//     localStorage.setItem("cart", JSON.stringify(productsDB));
//     setProductInCart(true);
//   };

//   return (
//     <>
//       {product.rating >= best && index <= length && (
//         <div className="card">
//           <div className="mb-4 relative flex items-center justify-center bg-[var(--bg-gray)] rounded">
//             <img
//               className="image w-[170px]"
//               src={product.thumbnail}
//               alt="product image"
//               loading="lazy"
//             />
//             {productInCart ? (
//               <Link
//                 to="/cart"
//                 className="button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2 text-center"
//               >
//                 Go to cart
//               </Link>
//             ) : (
//               <button
//                 onClick={handleAddToCart}
//                 className="button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2"
//               >
//                 Add to cart
//               </button>
//             )}
//           </div>
//           <div>
//             <Link to={`/all-products/${product.id}`}>
//               <h4 className="transition-all hover:text-[var(--red-color)]">
//                 {product.title.length <= 60
//                   ? product.title
//                   : `${product.title.slice(0, 60)}....`}
//               </h4>
//             </Link>
//             <span className="text-[#DB4444] font-medium my-2">
//               ${product.price}
//             </span>
//             <div className="flex items-center gap-2">
//               <span className="flex items-center gap-2">
//                 <img loading="lazy" src="star.png" alt="star icon" />
//                 {product.rating}
//               </span>
//               <span className="text-[#808080] text-sm font-semibold">
//                 ({product.reviews.length})
//               </span>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default ProductCard;
//#############################
/* eslint-disable */
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../utils/StateContext";
import "./ProductCard.css";

function ProductCard({ product, index, length = 56, best = 0 }) {
  const { addToCart, cart } = useContext(CartContext);
  const [productInCart, setProductInCart] = useState(false);

  useEffect(() => {
    const foundProduct = cart.find((p) => p.id === product.id);
    if (foundProduct) {
      setProductInCart(true);
    }
  }, [cart, product.id]);

  if (product.rating < best || index > length) {
    return null;
  }

  return (
    <div className="card">
      <div className="mb-4 relative flex items-center justify-center bg-[var(--bg-gray)] rounded">
        <img
          className="image w-[170px]"
          src={product.thumbnail}
          alt="product image"
          loading="lazy"
        />
        <div></div>
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
