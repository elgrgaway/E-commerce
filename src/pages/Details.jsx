// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import History from "../common/History";
// // import Skeleton from "react-loading-skeleton";
// // import LoadingProducts from "../utils/LoadingProducts";
// // import Error from "./Error";
// // import { useStateContext } from "../utils/StateContext";

// // function Details() {
// //   const { productId } = useParams();
// //   const [flashsaleData, setFlashsaleData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [imageIndex, setImageIndex] = useState(0);

// //   // const [productNum, setProductNum] = useState(0);

// //   const { decQty, incQty, qty, onAdd } = useStateContext();

// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch("https://dummyjson.com/products");
// //       if (!response.ok) {
// //         throw new Error("Failed to fetch data");
// //       }
// //       const data = await response.json();
// //       const product = data.products.find(
// //         (product) => product.id === parseInt(productId)
// //       );
// //       setFlashsaleData(product);
// //     } catch (error) {
// //       setError(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, [productId]);

// //   if (loading) {
// //     return <LoadingProducts length={12} />;
// //   }

// //   if (error) {
// //     return <Error />;
// //   }

// //   if (!flashsaleData) {
// //     return <Error />;
// //   }
// //   const getIndex = (index) => {
// //     setImageIndex(index);
// //   };
// //   // const increaseProductNum = () => {
// //   //   setProductNum(productNum + 1);
// //   // };
// //   // const decreaseProductNum = () => {
// //   //   if (productNum > 0) {
// //   //     setProductNum(productNum - 1);
// //   //   }
// //   // };
// //   return (
// //     <div>
// //       <History page={`All products / ${flashsaleData.title}`} />
// //       <div className="w-[82%] m-auto flex gap-[30px] items-stretch mb-[140px]">
// //         <div>
// //           {flashsaleData.images &&
// //             flashsaleData.images.map((image, index) => (
// //               <img
// //                 className="max-w-[121px]  bg-[var(--bg-gray)] rounded py-3 px-6 mb-4 cursor-pointer hover:bg-gray-300 transition-all"
// //                 key={index}
// //                 src={image}
// //                 alt={`product image ${index}`}
// //                 onClick={() => getIndex(index)}
// //                 loading="lazy"
// //               />
// //             ))}
// //         </div>
// //         <div className=" flex items-center justify-center flex-1  bg-[var(--bg-gray)] w-[500px] ">
// //           <img
// //             className=" w-full px-4  "
// //             src={flashsaleData.images[imageIndex]}
// //             alt=""
// //             loading="lazy"
// //           />
// //         </div>
// //         <div>
// //           <h4 className=" font-semibold text-2xl  font-[inter] mb-4">
// //             {flashsaleData.title}
// //           </h4>
// //           <div className="flex items-center gap-2 mb-4 flex-1">
// //             <span className="flex items-center gap-2">
// //               <i className="fa-solid fa-star  text-[#FFAD33]"></i>{" "}
// //               <span> {flashsaleData.rating}</span>
// //             </span>
// //             <span className="text-[#808080] text-sm ">
// //               <a href="#reviews">({flashsaleData.reviews.length} Reviews) |</a>
// //             </span>
// //             <span
// //               className={`${
// //                 flashsaleData.availabilityStatus === "In Stock"
// //                   ? "text-green-400"
// //                   : "text-red-500"
// //               }`}
// //             >
// //               {flashsaleData.availabilityStatus}
// //             </span>
// //           </div>
// //           <span className="text-2xl font-[inter]">$ {flashsaleData.price}</span>
// //           <p className="text-sm py-6 ">{flashsaleData.description}</p>
// //           <div className=" h-[1px] w-full bg-[var(--border-color)]"></div>
// //           <div className="mt-6">
// //             <div className="flex items-center gap-2 mb-6">
// //               <span className=" mr-4 text-xl">Colours: </span>
// //               <button className="w-5 h-5 bg-blue-400 rounded-full hover:border-2 border-black border-solid transition-all"></button>
// //               <button className="w-5 h-5 bg-red-400 rounded-full hover:border-2 border-black border-solid transition-all"></button>
// //             </div>
// //             <div className="flex items-center mb-6 ">
// //               <span className=" mr-4 text-xl">Size: </span>
// //               <div className="flex items-center gap-4 flex-1 ">
// //                 <button className="max-w-8  flex-1 text-center text-sm border-2 py-1.5 border-solid border-[var(--border-color)] rounded hover:bg-[var(--red-color)] hover:text-white hover:border-[var(--red-color)] transition-all">
// //                   XS
// //                 </button>
// //                 <button className="max-w-8 flex-1 text-center text-sm border-2 py-1.5 border-solid border-[var(--border-color)] rounded hover:bg-[var(--red-color)] hover:text-white hover:border-[var(--red-color)] transition-all">
// //                   S
// //                 </button>
// //                 <button className="max-w-8 flex-1 text-center text-sm border-2 py-1.5 border-solid border-[var(--border-color)] rounded hover:bg-[var(--red-color)] hover:text-white hover:border-[var(--red-color)] transition-all">
// //                   M
// //                 </button>
// //                 <button className="max-w-8 flex-1 text-center text-sm border-2 py-1.5 border-solid border-[var(--border-color)] rounded hover:bg-[var(--red-color)] hover:text-white hover:border-[var(--red-color)] transition-all">
// //                   L
// //                 </button>
// //                 <button className="max-w-8 flex-1 text-center text-sm border-2 py-1.5 border-solid border-[var(--border-color)] rounded hover:bg-[var(--red-color)] hover:text-white hover:border-[var(--red-color)] transition-all">
// //                   XL
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="flex gap-4 ">
// //               <div className="flex rounded overflow-hidden  ">
// //                 <button
// //                   className="border-solid border-[var(--border-color)] border-2 border-r-0 px-3 py-2 hover:bg-slate-200 transition-all "
// //                   onClick={decQty}
// //                 >
// //                   <i className="fa-solid fa-minus"></i>
// //                 </button>
// //                 <span className=" w-20  text-center py-[9px] border-solid border-r-0 border-[var(--border-color)] border-2 ">
// //                   {qty}
// //                 </span>
// //                 <button
// //                   className="bg-[var(--red-color)] border-solid border-[var(--red-color)] border-2 text-white px-3 py-2 hover:opacity-80 transition-all"
// //                   onClick={incQty}
// //                 >
// //                   <i className="fa-solid fa-plus"></i>
// //                 </button>
// //               </div>
// //               <button
// //                 onClick={() => onAdd(flashsaleData, qty)}
// //                 className="bg-[var(--red-color)] text-white  px-12 hover:opacity-80 rounded transition-all"
// //               >
// //                 Add to Cart
// //               </button>
// //               <button className="bg-[var(--red-color)] text-white  px-12 hover:opacity-80 rounded transition-all">
// //                 Buy Now
// //               </button>
// //               <button className="border-solid border-[var(--border-color)] border-2 rounded text-2xl px-2 hover:text-red-500 transition-all ">
// //                 <i className="fa-regular fa-heart  "></i>
// //               </button>
// //             </div>
// //             <div className="border-solid border-[var(--border-color)] border-2 rounded mt-10">
// //               <div className="flex items-center gap-4 px-4 py-6 border-b-2 border-solid border-[var(--border-color)] ">
// //                 <i className="fa-solid fa-truck-fast text-3xl"></i>
// //                 <div className="flex flex-col ">
// //                   <span className=" font-medium mb-2">Free delivery</span>
// //                   <span>
// //                     <a href="#">
// //                       Enter your postal code for Delivery Availability
// //                     </a>
// //                   </span>
// //                 </div>
// //               </div>
// //               <div className="flex items-center gap-4 px-4 py-6">
// //                 <i className="fa-solid fa-arrows-rotate text-3xl"></i>
// //                 <div className="flex flex-col ">
// //                   <span className=" font-medium mb-2">Return Delivery</span>
// //                   <span>
// //                     Free 30 Days Delivery Returns. <a href="#">Details</a>
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="w-[82%] m-auto ">
// //         <div className="flex items-center gap-4 mb-[60px]">
// //           <div className="bg-[var(--red-color)] w-5 h-10 rounded"></div>
// //           <span className="text-[var(--red-color)] font-semibold" id="reviews">
// //             Reviews
// //           </span>
// //         </div>
// //         <div>
// //           {flashsaleData.reviews.map((review, index) => (
// //             <div
// //               key={index}
// //               className={`flex flex-col  my-4 pb-4 ${
// //                 index < flashsaleData.reviews.length - 1 &&
// //                 "border-b-2 border-solid border-[var(--border-color)]"
// //               } `}
// //             >
// //               <span className=" font-medium">{review.reviewerName}</span>
// //               <div className="flex items-center gap-2 mt-2 mb-4">
// //                 <span>{review.rating}</span>
// //                 <i className="fa-solid fa-star  text-[#FFAD33]"></i>
// //                 <span className="text-[var(--text-gray)]">
// //                   {review.date.slice(0, 10)}
// //                 </span>
// //               </div>
// //               <span>{review.comment}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Details;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import History from "../common/History";
// import Error from "./Error";
// import { useStateContext } from "../utils/StateContext";
// import LoadingProducts from "../utils/LoadingProducts";

// function Details() {
//   const { productId } = useParams();
//   const { decQty, incQty, qty, onAdd } = useStateContext();

//   const [productData, setProductData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [imageIndex, setImageIndex] = useState(0);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/products");
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       const product = data.products.find(
//         (product) => product.id === parseInt(productId)
//       );
//       setProductData(product);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [productId]);

//   const handleImageClick = (index) => {
//     setImageIndex(index);
//   };

//   if (loading) {
//     return <LoadingProducts length={12} />;
//   }

//   if (error || !productData) {
//     return <Error />;
//   }

//   return (
//     <div>
//       <History page={`All products / ${productData.title}`} />
//       <div className="w-[82%] m-auto flex gap-[30px] items-stretch mb-[140px]">
//         <div>
//           {productData.images &&
//             productData.images.map((image, index) => (
//               <img
//                 key={index}
//                 className="max-w-[121px] bg-[var(--bg-gray)] rounded py-3 px-6 mb-4 cursor-pointer hover:bg-gray-300 transition-all"
//                 src={image}
//                 alt={`product image ${index}`}
//                 onClick={() => handleImageClick(index)}
//                 loading="lazy"
//               />
//             ))}
//         </div>
//         <div className="flex items-center justify-center flex-1 bg-[var(--bg-gray)] w-[500px]">
//           <img
//             className="w-full px-4"
//             src={productData.images[imageIndex]}
//             alt=""
//             loading="lazy"
//           />
//         </div>
//         <div>
//           <h4 className="font-semibold text-2xl font-[inter] mb-4">
//             {productData.title}
//           </h4>
//           <div className="flex items-center gap-2 mb-4 flex-1">
//             <span className="flex items-center gap-2">
//               <i className="fa-solid fa-star text-[#FFAD33]"></i>{" "}
//               <span> {productData.rating}</span>
//             </span>
//             <span className="text-[#808080] text-sm ">
//               <a href="#reviews">({productData.reviews.length} Reviews) |</a>
//             </span>
//             <span
//               className={`${
//                 productData.availabilityStatus === "In Stock"
//                   ? "text-green-400"
//                   : "text-red-500"
//               }`}
//             >
//               {productData.availabilityStatus}
//             </span>
//           </div>
//           <span className="text-2xl font-[inter]">$ {productData.price}</span>
//           <p className="text-sm py-6 ">{productData.description}</p>
//           <div className="h-[1px] w-full bg-[var(--border-color)]"></div>
//           <div className="mt-6">
//             <div className="flex items-center gap-2 mb-6">
//               <span className="mr-4 text-xl">Colours: </span>
//               <button className="w-5 h-5 bg-blue-400 rounded-full hover:border-2 border-black border-solid transition-all"></button>
//               <button className="w-5 h-5 bg-red-400 rounded-full hover:border-2 border-black border-solid transition-all"></button>
//             </div>
//             <div className="flex items-center mb-6 ">
//               <span className="mr-4 text-xl">Size: </span>
//               <div className="flex items-center gap-4 flex-1 ">
//                 {["XS", "S", "M", "L", "XL"].map((size) => (
//                   <button
//                     key={size}
//                     className="max-w-8 flex-1 text-center text-sm border-2 py-1.5 border-solid border-[var(--border-color)] rounded hover:bg-[var(--red-color)] hover:text-white hover:border-[var(--red-color)] transition-all"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="flex gap-4 ">
//               <div className="flex rounded overflow-hidden ">
//                 <button
//                   className="border-solid border-[var(--border-color)] border-2 border-r-0 px-3 py-2 hover:bg-slate-200 transition-all"
//                   onClick={decQty}
//                 >
//                   <i className="fa-solid fa-minus"></i>
//                 </button>
//                 <span className="w-20 text-center py-[9px] border-solid border-r-0 border-[var(--border-color)] border-2 ">
//                   {qty}
//                 </span>
//                 <button
//                   className="bg-[var(--red-color)] border-solid border-[var(--red-color)] border-2 text-white px-3 py-2 hover:opacity-80 transition-all"
//                   onClick={incQty}
//                 >
//                   <i className="fa-solid fa-plus"></i>
//                 </button>
//               </div>
//               <button
//                 onClick={() => onAdd(productData, qty)}
//                 className="bg-[var(--red-color)] text-white px-12 hover:opacity-80 rounded transition-all"
//               >
//                 Add to Cart
//               </button>
//               <button className="bg-[var(--red-color)] text-white px-12 hover:opacity-80 rounded transition-all">
//                 Buy Now
//               </button>
//               <button className="border-solid border-[var(--border-color)] border-2 rounded text-2xl px-2 hover:text-red-500 transition-all ">
//                 <i className="fa-regular fa-heart "></i>
//               </button>
//             </div>
//             <div className="border-solid border-[var(--border-color)] border-2 rounded mt-10">
//               <div className="flex items-center gap-4 px-4 py-6 border-b-2 border-solid border-[var(--border-color)] ">
//                 <i className="fa-solid fa-truck-fast text-3xl"></i>
//                 <div className="flex flex-col ">
//                   <span className="font-medium mb-2">Free delivery</span>
//                   <span>
//                     <a href="#">
//                       Enter your postal code for Delivery Availability
//                     </a>
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 px-4 py-6">
//                 <i className="fa-solid fa-arrows-rotate text-3xl"></i>
//                 <div className="flex flex-col ">
//                   <span className="font-medium mb-2">Return Delivery</span>
//                   <span>
//                     Free 30 Days Delivery Returns. <a href="#">Details</a>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-[82%] m-auto ">
//         <div className="flex items-center gap-4 mb-[60px]">
//           <div className="bg-[var(--red-color)] w-5 h-10 rounded"></div>
//           <span className="text-[var(--red-color)] font-semibold" id="reviews">
//             Reviews
//           </span>
//         </div>
//         <div>
//           {productData.reviews.map((review, index) => (
//             <div
//               key={index}
//               className={`flex flex-col my-4 pb-4 ${
//                 index < productData.reviews.length - 1 &&
//                 "border-b-2 border-solid border-[var(--border-color)]"
//               } `}
//             >
//               <span className="font-medium">{review.reviewerName}</span>
//               <div className="flex items-center gap-2 mt-2 mb-4">
//                 <span>{review.rating}</span>
//                 <i className="fa-solid fa-star text-[#FFAD33]"></i>
//                 <span className="text-[var(--text-gray)]">
//                   {review.date.slice(0, 10)}
//                 </span>
//               </div>
//               <span>{review.comment}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Details;
//#################
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import History from "../common/History";
import CartContext from "../utils/StateContext";

import Error from "./Error";
import LoadingProducts from "../utils/LoadingProducts";

function Details() {
  const { productId } = useParams();
  // const [qty, setQty] = useState(1);
  // const [cartItems, setCartItems] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [totalQuantities, setTotalQuantities] = useState(0);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const { addToCart } = useContext(CartContext);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const product = data.products.find(
        (product) => product.id === parseInt(productId)
      );
      setProductData(product);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  const handleImageClick = (index) => {
    setImageIndex(index);
  };

  // const incQty = () => {
  //   setQty((prevQty) => prevQty + 1);
  // };

  // const decQty = () => {
  //   setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
  // };

  // const onAdd = (product, quantity) => {
  //   const existingProduct = cartItems.find((item) => item.id === product.id);
  //   const updatedPrice = totalPrice + product.price * quantity;
  //   setTotalPrice(updatedPrice);
  //   setTotalQuantities(totalQuantities + quantity);

  //   if (existingProduct) {
  //     const updatedCartItems = cartItems.map((item) =>
  //       item.id === product.id
  //         ? { ...item, quantity: item.quantity + quantity }
  //         : item
  //     );
  //     setCartItems(updatedCartItems);
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity }]);
  //   }

  // toast.success(`${quantity} ${product.title} added to the cart.`);
  // };

  if (loading) {
    return <LoadingProducts length={12} />;
  }

  if (error || !productData) {
    return <Error />;
  }

  return (
    <div>
      <History page={`All products / ${productData.title}`} />
      <div className="w-[82%] m-auto flex gap-[30px] items-stretch mb-[140px] max-lg:flex-col ">
        <div className="flex gap-[30px] max-lg:flex-col-reverse max-lg:items-center">
          <div className="flex flex-col max-lg:flex-row gap-4 max-md:w-full ">
            {productData.images &&
              productData.images.map((image, index) => (
                <img
                  key={index}
                  className=" object-contain max-h-[121px] bg-[var(--bg-gray)] rounded py-3 px-6  cursor-pointer hover:bg-gray-300 transition-all max-md:w-[25%]"
                  src={image}
                  alt={`product image ${index}`}
                  onClick={() => handleImageClick(index)}
                  loading="lazy"
                />
              ))}
          </div>
          <div className="flex items-center justify-center flex-1 bg-[var(--bg-gray)] w-[500px] max-h-[650px] overflow-hidden p-4 object-contain max-md:w-full  ">
            <img
              className="h-[95%]   "
              src={productData.images[imageIndex]}
              alt={`${productData.title} image`}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-2xl font-[inter] mb-4">
            {productData.title}
          </h4>
          <div className="flex items-center gap-2 mb-4 flex-1">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-star text-[#FFAD33]"></i>{" "}
              <span> {productData.rating}</span>
            </span>
            <span className="text-[#808080] text-sm ">
              <a href="#reviews">({productData.reviews.length} Reviews) |</a>
            </span>
            <span
              className={`${
                productData.availabilityStatus === "In Stock"
                  ? "text-green-400"
                  : "text-red-500"
              }`}
            >
              {productData.availabilityStatus}
            </span>
          </div>
          <span className="text-2xl font-[inter]">$ {productData.price}</span>
          <p className="text-sm py-6 ">{productData.description}</p>
          <div className="h-[1px] w-full bg-[var(--border-color)]"></div>
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="mr-4 text-xl">Colours: </span>
              <button className="w-5 h-5 bg-blue-400 rounded-full hover:border-2 border-black border-solid transition-all"></button>
              <button className="w-5 h-5 bg-red-400 rounded-full hover:border-2 border-black border-solid transition-all"></button>
            </div>
            <div className="flex items-center mb-6 ">
              <span className="mr-4 text-xl">Size: </span>
              <div className="flex items-center gap-4 flex-1 ">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="max-w-8 flex-1 text-center text-sm border-2 py-1.5 border-solid border-[var(--border-color)] rounded hover:bg-[var(--red-color)] hover:text-white hover:border-[var(--red-color)] transition-all"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-4  max-md:flex-wrap">
              {/* <div className="flex rounded overflow-hidden ">
                <button
                  className="border-solid border-[var(--border-color)] border-2 border-r-0 px-3 py-2 hover:bg-slate-200 transition-all"
                  onClick={decQty}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="w-20 text-center py-[9px] border-solid border-r-0 border-[var(--border-color)] border-2 ">
                  {qty}
                </span>
                <button
                  className="bg-[var(--red-color)] border-solid border-[var(--red-color)] border-2 text-white px-3 py-2 hover:opacity-80 transition-all"
                  onClick={incQty}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div> */}
              <button
                onClick={() => addToCart(productData)}
                className="bg-[var(--red-color)] text-white px-12  py-4  hover:opacity-80 rounded transition-all"
              >
                Add to Cart
              </button>
              <Link
                to="/cart"
                className="bg-[var(--red-color)] py-4 text-white px-12 hover:opacity-80
               content-center
               rounded transition-all"
              >
                Buy Now
              </Link>
              <button className="border-solid border-[var(--border-color)] border-2 rounded text-2xl px-2 hover:text-red-500 transition-all ">
                <i className="fa-regular fa-heart "></i>
              </button>
            </div>
            <div className="border-solid border-[var(--border-color)] border-2 rounded mt-10">
              <div className="flex items-center gap-4 px-4 py-6 border-b-2 border-solid border-[var(--border-color)] ">
                <i className="fa-solid fa-truck-fast text-3xl"></i>
                <div className="flex flex-col ">
                  <span className="font-medium mb-2">Free delivery</span>
                  <span>
                    <a href="#">
                      Enter your postal code for Delivery Availability
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 py-6">
                <i className="fa-solid fa-arrows-rotate text-3xl"></i>
                <div className="flex flex-col ">
                  <span className="font-medium mb-2">Return Delivery</span>
                  <span>
                    Free 30 Days Delivery Returns. <a href="#">Details</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[82%] m-auto ">
        <div className="flex items-center gap-4 mb-[60px]">
          <div className="bg-[var(--red-color)] w-5 h-10 rounded"></div>
          <span className="text-[var(--red-color)] font-semibold" id="reviews">
            Reviews
          </span>
        </div>
        <div>
          {productData.reviews.map((review, index) => (
            <div
              key={index}
              className={`flex flex-col my-4 pb-4 ${
                index < productData.reviews.length - 1 &&
                "border-b-2 border-solid border-[var(--border-color)]"
              } `}
            >
              <span className="font-medium">{review.reviewerName}</span>
              <div className="flex items-center gap-2 mt-2 mb-4">
                <span>{review.rating}</span>
                <i className="fa-solid fa-star text-[#FFAD33]"></i>
                <span className="text-[var(--text-gray)]">
                  {review.date.slice(0, 10)}
                </span>
              </div>
              <span>{review.comment}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
