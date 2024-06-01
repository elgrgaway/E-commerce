import { useState, useEffect } from "react";
import styles from "./ProductsList.module.css";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import LoadingProducts from "../utils/LoadingProducts";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
function ProductsList() {
  const navigate = useNavigate();
  const [flashsaleData, setFlashsaleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://route-ecommerce.onrender.com/api/v1/products"
      );
      if (!response.ok) {
        setError("error");
      }
      const data = await response.json();
      setFlashsaleData(data.data);
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
    <>
      {/* {loading && (
        <div className={styles["loading-parent"]}>
          <div className={styles.loading}></div>;
        </div>
      )} */}
      {loading && <LoadingProducts length={10} width="82%" />}
      {error && navigate("/error")}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[82%] m-auto">
        {flashsaleData &&
          flashsaleData.map((product, index) => (
            <ProductCard key={product._id} product={product} index={index} />
          ))}
      </div>
    </>
  );
}
export default ProductsList;
