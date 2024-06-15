import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className=" flex flex-col gap-4 pt-10 px-4 border-r-2 border-solid border-[var(--border-color)]] max-lg:flex-row max-lg:text-sm max-lg:border-none  flex-wrap">
      <Link
        className=" transition-all hover:text-[var(--red-color)] flex items-center justify-between"
        to="/all-products"
      >
        Woman`s Fashion
        <span className=" text-[18px]">&gt;</span>
      </Link>
      <Link
        className=" transition-all hover:text-[var(--red-color)] flex items-center gap-14"
        to="/all-products"
      >
        Mens`s Fashion
        <span className=" text-[18px]">&gt;</span>
      </Link>
      <Link
        className=" transition-all hover:text-[var(--red-color)]"
        to="/all-products"
      >
        Electroincs
      </Link>
      <Link
        className=" transition-all hover:text-[var(--red-color)]"
        to="/all-products"
      >
        Home & Lifestyle
      </Link>
      <Link
        className=" transition-all hover:text-[var(--red-color)]"
        to="/all-products"
      >
        Medicine
      </Link>
      <Link
        className="transition-all  hover:text-[var(--red-color)]"
        to="/all-products"
      >
        Sports & Outdoor
      </Link>
      <Link
        className=" transition-all hover:text-[var(--red-color)]"
        to="/all-products"
      >
        Baby`s & Toys
      </Link>
      <Link
        className=" transition-all hover:text-[var(--red-color)]"
        to="/all-products"
      >
        Groceries & Pets
      </Link>
      <Link
        className=" transition-all hover:text-[var(--red-color)]"
        to="/all-products"
      >
        Health & Beauty
      </Link>
    </div>
  );
}
export default SideBar;
