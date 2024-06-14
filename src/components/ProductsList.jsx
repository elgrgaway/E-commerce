// import { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";
// import { useNavigate } from "react-router-dom";
// import LoadingProducts from "../utils/LoadingProducts";

// function ProductsList({ length }) {
//   const navigate = useNavigate();
//   const [flashsaleData, setFlashsaleData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/products");
//       if (!response.ok) {
//         setError("error");
//       }
//       const data = await response.json();
//       // console.log(data.products);
//       setFlashsaleData(data.products);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   // flashsaleData.map((product) => {
//   //   console.log(product.thumbnail);
//   // });
//   return (
//     <>
//       {/* {loading && (
//         <div className={styles["loading-parent"]}>
//           <div className={styles.loading}></div>;
//         </div>
//       )} */}
//       {loading && <LoadingProducts length={12} width="82%" />}
//       {error && navigate("/error")}
//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[82%] m-auto">
//         {flashsaleData &&
//           flashsaleData.map((product, index) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               index={index}
//               length={length}
//             />
//           ))}
//       </div>
//     </>
//   );
// }
// export default ProductsList;
//#####################
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import LoadingProducts from "../utils/LoadingProducts";

function ProductsList({ length }) {
  const navigate = useNavigate();
  const [flashsaleData, setFlashsaleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setFlashsaleData(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error, navigate]);

  if (loading) {
    return <LoadingProducts length={12} width="82%" />;
  }

  return (
    <>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[82%] m-auto">
        {flashsaleData.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            length={length}
          />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
