import { Link, useNavigate } from "react-router-dom";
function SideBar({ setProducts }) {
  const navigate = useNavigate();
  const searchHandler = (value) => {
    navigate("/search-products");

    if (value === "beauty") {
      fetch(`https://dummyjson.com/products/category/beauty`).then((data) =>
        setProducts(data.url)
      );
    } else if (value === "groceries") {
      fetch(`https://dummyjson.com/products/category/groceries`).then((data) =>
        setProducts(data.url)
      );
    } else {
      fetch(`https://dummyjson.com/products/search?q=${value}`).then((data) =>
        setProducts(data.url)
      );
    }
  };
  // console.log(setProducts);

  return (
    <div className=" flex flex-col items-start gap-4 pt-10 px-4 border-r-2 border-solid border-[var(--border-color)]] max-lg:flex-row max-lg:text-sm max-lg:border-none  flex-wrap">
      <button
        className=" transition-all hover:text-[var(--red-color)] w-full flex items-center justify-between max-lg:w-fit gap-4 "
        // to="/search-products"
        onClick={() => searchHandler("fashion")}
      >
        Women`s Fashion
        <span className=" text-[18px] ">&gt;</span>
      </button>
      <button
        className=" transition-all hover:text-[var(--red-color)] flex items-center gap-14 max-md:gap-4"
        // to="/all-products"
        onClick={() => searchHandler("shirt")}
      >
        Mens`s Fashion
        <span className=" text-[18px]">&gt;</span>
      </button>
      <button
        className=" transition-all hover:text-[var(--red-color)]"
        // to="/all-products"
        onClick={() => searchHandler("laptop")}
      >
        Electroincs
      </button>
      <button
        className=" transition-all hover:text-[var(--red-color)]"
        // to="/all-products"

        onClick={() => searchHandler("kitchen")}
      >
        Home & Lifestyle
      </button>
      <Link
        className=" transition-all hover:text-[var(--red-color)]"
        to="/all-products"
      >
        Medicine
      </Link>
      <button
        className="transition-all  hover:text-[var(--red-color)]"
        // to="/all-products"
        onClick={() => searchHandler("ball")}
      >
        Sports & Outdoor
      </button>
      <button
        className=" transition-all hover:text-[var(--red-color)]"
        // to="/all-products"
        onClick={() => searchHandler("game")}
      >
        Baby`s & Toys
      </button>
      <button
        className=" transition-all hover:text-[var(--red-color)]"
        // to="/all-products"
        onClick={() => searchHandler("groceries")}
      >
        Groceries & Pets
      </button>
      <button
        className=" transition-all hover:text-[var(--red-color)]"
        // to="/all-products"
        onClick={() => searchHandler("beauty")}
      >
        Health & Beauty
      </button>
    </div>
  );
}
export default SideBar;
