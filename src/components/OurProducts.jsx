import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingProducts from "../utils/LoadingProducts";
import ProductCard from "./ProductCard";

function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erorr, setError] = useState(false);

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
          Our Products
        </span>
      </div>
      <div className="flex justify-between items-center mb-10">
        <span className=" font-[inter] font-semibold text-4xl mr-20 ">
          Explore Our Products
        </span>
      </div>
      {loading && <LoadingProducts length={8} />}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              best={4.4}
            />
          ))}
      </div>
      <div className=" text-center">
        <Link
          to="/all-products"
          className="bg-[var(--red-color)] text-white rounded py-4 px-12 mr-2 font-medium hover:opacity-80 transition-all inline-block mt-[60px]"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
export default OurProducts;
