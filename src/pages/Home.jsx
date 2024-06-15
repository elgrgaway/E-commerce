// import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";
import BestSelling from "../components/BestSelling";
import BrowseCategory from "../components/BrowseCategory";
import FullServices from "../components/FullServices";
import MainSlider from "../components/MainSlider";
import MusicSection from "../components/MusicSection";
import NewArrival from "../components/NewArrival";
import OurProducts from "../components/OurProducts";
// import ProductsList from "../components/ProductsList";
import SideBar from "../components/SideBar";
import TodayProducts from "../components/TodayProducts";

// import Timer from "../components/Timer";
function Home() {
  const [p, setProducts] = useOutletContext();

  return (
    <div className="w-[82%] m-auto max-lg:w-[90%]">
      <div className="flex gap-11 mb-[140px] max-lg:flex-col ">
        <SideBar setProducts={setProducts} />
        <MainSlider />
      </div>
      <TodayProducts />
      <BrowseCategory />
      <BestSelling />
      <MusicSection />
      <OurProducts />
      <NewArrival />
      <FullServices />
      {/* <div>HOme</div> */}
      {/* <ProductsList /> */}
      {/*  */}
    </div>
  );
}
export default Home;
