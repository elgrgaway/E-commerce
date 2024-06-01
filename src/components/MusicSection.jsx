import { Link } from "react-router-dom";
import Timer from "./Timer";

function MusicSection() {
  return (
    <div className="bg-black flex items-center justify-between h-[500px] px-14 text-white rounded mb-[70px]">
      <div>
        <span className="text-[#00ff66] font-semibold">Categories</span>
        <h5 className="text-5xl font-semibold font-[inter] leading-[60px] my-8 ">
          Enhance Your Music Experience
        </h5>
        <Timer duration={3 * 24 * 60 * 60 * 1000} />
        <Link
          to="all-products"
          className="bg-[#00FF66] text-white py-4 px-12 rounded  font-medium mt-10 inline-block"
        >
          Buy Now!
        </Link>
      </div>
      <div className=" relative flex justify-center items-center">
        <img className=" z-[1] " src="music-section.png" alt="" />
        <img className=" absolute h-[600px] " src="light.png" alt="" />
      </div>
    </div>
  );
}
export default MusicSection;
