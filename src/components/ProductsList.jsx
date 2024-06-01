import { useState, useEffect } from "react";
import styles from "./ProductsList.module.css";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
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
      {loading && (
        <div className={styles["loading-parent"]}>
          <div className={styles.loading}></div>;
        </div>
      )}
      {error && navigate("/error")}
      <div className=" grid grid-cols-4 gap-4 max-w-[82%] m-auto">
        {flashsaleData &&
          flashsaleData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </>
  );
}
export default ProductsList;
