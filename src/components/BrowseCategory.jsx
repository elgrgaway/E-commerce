import { Link } from "react-router-dom";

function BrowseCategory() {
  return (
    <div className="mb-20 border-b-2 border-solid border-[var(--border-color)]">
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-[var(--red-color)] w-5 h-10 rounded"></div>
        <span className="text-[var(--red-color)] font-semibold">
          Categories
        </span>
      </div>
      <div className="flex justify-between items-center mb-10">
        <span className=" font-[inter] font-semibold text-4xl mr-20 ">
          Browse By Category
        </span>
      </div>
      <ul className="flex items-center gap-[30px] max-sm:flex-col mb-[60px] max-md:flex-wrap ">
        <li className=" min-w-[250px] border-2 border-solid border-[var(--border-color)] rounded py-6 flex-1 hover:bg-[var(--red-color)] hover:text-white hover:border-[white] transition-all">
          <Link to="/all-products" className="flex flex-col items-center">
            <i className=" text-5xl fa-solid fa-mobile-screen mb-4"></i>
            <span>Phones</span>
          </Link>
        </li>
        <li className=" min-w-[250px] border-2 border-solid border-[var(--border-color)] rounded py-6 flex-1 hover:bg-[var(--red-color)] hover:text-white hover:border-[white] transition-all">
          <Link to="/all-products" className="flex flex-col items-center">
            <i className=" text-5xl fa-solid fa-desktop mb-4"></i>
            <span>Computers</span>
          </Link>
        </li>
        <li className=" min-w-[250px] border-2 border-solid border-[var(--border-color)] rounded py-6 flex-1 hover:bg-[var(--red-color)] hover:text-white hover:border-[white] transition-all">
          <Link to="/all-products" className="flex flex-col items-center">
            <i className=" text-5xl fa-solid fa-camera mb-4"></i>
            <span>Camers</span>
          </Link>
        </li>
        <li className=" min-w-[250px] border-2 border-solid border-[var(--border-color)] rounded py-6 flex-1 hover:bg-[var(--red-color)] hover:text-white hover:border-[white] transition-all">
          <Link to="/all-products" className="flex flex-col items-center">
            <i className=" text-5xl fa-solid fa-headphones mb-4"></i>
            <span>HeadPhones</span>
          </Link>
        </li>
        <li className=" min-w-[250px] border-2 border-solid border-[var(--border-color)] rounded py-6 flex-1 hover:bg-[var(--red-color)] hover:text-white hover:border-[white] transition-all">
          <Link to="/all-products" className="flex flex-col items-center">
            <i className=" text-5xl fa-solid fa-gamepad mb-4"></i>
            <span>Gaming</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default BrowseCategory;
