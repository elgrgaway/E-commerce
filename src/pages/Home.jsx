// import ProductCard from "../components/ProductCard";
import BrowseCategory from "../components/BrowseCategory";
import MainSlider from "../components/MainSlider";
// import ProductsList from "../components/ProductsList";
import SideBar from "../components/SideBar";
import TodayProducts from "../components/TodayProducts";

// import Timer from "../components/Timer";
function Home() {
  return (
    <div className="w-[82%] m-auto">
      <div className="flex gap-11 mb-[140px] ">
        <SideBar />
        <MainSlider />
      </div>
      <TodayProducts />
      <BrowseCategory />
      {/* <div>HOme</div> */}
      {/* <ProductsList /> */}
      {/*  */}
    </div>
  );
}
export default Home;
