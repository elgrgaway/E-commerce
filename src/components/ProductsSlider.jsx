import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingProducts from "../utils/LoadingProducts";
function ProductsSlider() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erorr, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://route-ecommerce.onrender.com/api/v1/products"
      );
      if (!response.ok) {
        setError("error");
      }
      const data = await response.json();
      setSlides(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div className="mb-20 ">
        {loading && <LoadingProducts length={4} />}
        <Slider {...settings}>
          {slides.map((product, index) => {
            {
              if (index <= 20) {
                return (
                  <div key={index} className="card">
                    <div className="mb-4 relative flex items-center justify-center bg-[var(--bg-gray)] rounded">
                      <img
                        className="image w-[170px] object-cover"
                        src={product.imageCover}
                        alt="product image"
                        loading="lazy"
                      />
                      <button className=" button-addTocart absolute bottom-0 right-0 left-0 bg-black text-white py-2  ">
                        Add to cart
                      </button>
                    </div>
                    <div>
                      <Link>
                        <h4 className=" transition-all  hover:text-[var(--red-color)]">
                          {product.title.length <= 60
                            ? product.title
                            : product.title.slice(0, 60) + "..."}
                        </h4>
                      </Link>
                      <span className="text-[#DB4444] font-medium">
                        ${product.price}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-2">
                          <img loading="lazy" src="star.png" alt="star icon" />
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
            }
          })}
        </Slider>
      </div>
    </div>
  );
}
export default ProductsSlider;
