import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LoadingProducts from "../utils/LoadingProducts";
import Error from "../pages/Error";

function BestSelling() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        setError("error");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mb-[140px]">
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-[var(--red-color)] w-5 h-10 rounded"></div>
        <span className="text-[var(--red-color)] font-semibold">
          This Month
        </span>
      </div>
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center">
          <span className=" font-[inter] font-semibold text-4xl mr-20 ">
            Best Selling Products
          </span>
        </div>
        <Link
          to="/all-products"
          className="bg-[var(--red-color)] text-white rounded py-4 px-12 mr-2 font-medium hover:opacity-80 transition-all"
        >
          View All
        </Link>
      </div>
      {loading && <LoadingProducts length={4} />}
      {error && <p className="text-center">Products Not Found </p>}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={product._id}
              product={product}
              index={index}
              // length={7}
              best={4.62}
            />
          ))}
      </div>
    </div>
  );
}
export default BestSelling;
