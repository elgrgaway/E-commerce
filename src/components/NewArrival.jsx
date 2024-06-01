import { Link } from "react-router-dom";

function NewArrival() {
  return (
    <div className="mb-[140px]">
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-[var(--red-color)] w-5 h-10 rounded"></div>
        <span className="text-[var(--red-color)] font-semibold">Featured </span>
      </div>
      <div className="flex justify-between items-center mb-10">
        <span className=" font-[inter] font-semibold text-4xl mr-20 ">
          New Arrival
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4   p-4 box-border md:grid-cols-4 md:grid-rows-2">
        <div className="relative bg-black  text-white flex justify-center  text-xl md:text-2xl rounded col-span-1 md:col-span-2 md:row-span-2">
          <img className=" mx-[30px] mt-[90px]" src="ps5.png" alt="ps5 image" />
          <div className=" absolute bottom-0 left-4">
            <span className=" text-2xl font-semibold font-[inter]">
              PlayStation 5
            </span>
            <p className=" text-sm my-4">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <Link
              className=" block mb-8 text-base font-medium underline underline-offset-4"
              to="/all-products"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className=" relative bg-black min-h-[300px] text-white flex justify-center items-center text-xl md:text-2xl rounded col-span-1 md:col-span-2">
          <div className=" absolute bottom-0 left-4">
            <span className=" text-2xl font-semibold font-[inter]">
              Women’s Collections{" "}
            </span>
            <p className=" text-sm my-4">
              Featured woman collections that <br /> give you another vibe.{" "}
            </p>
            <Link
              className=" block mb-8 text-base font-medium underline underline-offset-4"
              to="/all-products"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className=" relative bg-black text-white flex justify-center items-center text-xl md:text-2xl rounded col-span-1">
          <img
            className=" mx-[30px] mt-[90px]"
            src="speakers.png"
            alt="speakers image"
          />
          <div className=" absolute bottom-0 left-4">
            <span className=" text-2xl font-semibold font-[inter]">
              Speakers{" "}
            </span>
            <p className=" text-sm my-4">Amazon wireless speakers </p>
            <Link
              className=" block mb-8 text-base font-medium underline underline-offset-4"
              to="/all-products"
            >
              Shop Now
            </Link>
          </div>{" "}
        </div>
        <div className="relative bg-black text-white flex justify-center items-end text-xl md:text-2xl rounded col-span-1">
          <img
            className=" mx-[30px] mt-[90px]"
            src="perfume.png"
            alt="perfume image"
          />
          <div className=" absolute bottom-0 left-4">
            <span className=" text-2xl font-semibold font-[inter]">
              Perfume{" "}
            </span>
            <p className=" text-sm my-4">GUCCI INTENSE OUD EDP </p>
            <Link
              className=" block mb-8 text-base font-medium underline underline-offset-4"
              to="/all-products"
            >
              Shop Now
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default NewArrival;
