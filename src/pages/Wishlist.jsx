import { useEffect, useState } from "react";
import History from "../common/History";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(wishlistItems);
  }, [wishlist]);
  return (
    <div>
      <History page="Wishlist" />
      {wishlist.length > 0 ? (
        <div className="mt-10 mb-[140px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 max-w-[82%] m-auto">
          {wishlist &&
            wishlist.map((product) => (
              <div key={product.id} className=" relative">
                <button
                  // onClick={}
                  className="absolute left-8 top-5 bg-red-500 flex items-center justify-center text-[10px] rounded-full  hover:bg-red-700 transition-all"
                >
                  <i className="fa-solid fa-x text-white px-2 py-2"></i>
                </button>
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      ) : (
        <div className="mb-[140px] text-center">
          <p className="text-3xl mb-4">Wishlist is empty</p>
          <Link to="/" className="text-red-500">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
