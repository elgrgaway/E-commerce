// import ProductCard from "../components/ProductCard";
import MainSlider from "../components/MainSlider";
// import ProductsList from "../components/ProductsList";
import SideBar from "../components/SideBar";

// import Timer from "../components/Timer";
function Home() {
  return (
    <div className="w-[82%] m-auto">
      <div className="flex gap-11 mb-[140px] ">
        <SideBar />
        <MainSlider />
      </div>
      {/* <div>HOme</div> */}
      {/* <ProductsList /> */}
      {/* <Timer duration={3 * 24 * 60 * 60 * 1000} /> */}
    </div>
  );
}
export default Home;
