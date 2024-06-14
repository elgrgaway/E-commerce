import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import LoadingProducts from "../utils/LoadingProducts";
import Skeleton from "react-loading-skeleton";
import { useOutletContext } from "react-router-dom";

function AllProducts({ length }) {
  const navigate = useNavigate();
  const [flashsaleData, setFlashsaleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles] = useOutletContext();
  // useEffect(()=>{

  // },[articles])
  const fetchData = async () => {
    try {
      const response = await fetch(articles);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setFlashsaleData(data.products);
    } catch (error) {
      console.log(articles);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [articles]);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  if (loading) {
    return (
      <>
        <div className="max-w-[20%] m-auto ">
          <Skeleton className="text-3xl font-semibold  mt-10 " />
        </div>
        <LoadingProducts length={12} width="82%" />
      </>
    );
  }

  return (
    <div className="max-w-[82%] m-auto mt-10 mb-[140px]">
      <h3 className=" text-3xl font-semibold text-center">All products</h3>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 ">
        {flashsaleData.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            length={length}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
