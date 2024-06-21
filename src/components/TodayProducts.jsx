import { Link } from "react-router-dom";
import Timer from "./Timer";
import ProductsSlider from "./ProductsSlider";
function TodayProducts() {
  return (
    <div className="mb-20 border-b-2 border-solid border-[var(--border-color)]">
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-[var(--red-color)] w-5 h-10 rounded"></div>
        <span className="text-[var(--red-color)] font-semibold">Today`s</span>
      </div>
      <div className="flex justify-between items-center mb-10 ">
        <div className="flex items-center flex-wrap gap-20 max-md:gap-10">
          <span className=" font-[inter] font-semibold text-4xl  ">
            Flash Sales
          </span>
          <Timer duration={3 * 24 * 60 * 60 * 1000} />{" "}
        </div>
        {/* <div>
          <button className="bg-[var(--bg-gray)] rounded-full p-[11px] mr-2">
            <img src="black-arrow.png" alt="left arrow icon" />
          </button>
          <button className="bg-[var(--bg-gray)] rounded-full p-[11px]">
            <img
              className=" rotate-[180deg]"
              src="black-arrow.png"
              alt="right arrow icon"
            />
          </button>
        </div> */}
      </div>
      <ProductsSlider />
      <div className=" text-center pb-[60px] mt-4">
        <Link
          to="/all-products"
          className="bg-[var(--red-color)] text-white px-12 py-4 rounded hover:opacity-80 transition-all"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
export default TodayProducts;
