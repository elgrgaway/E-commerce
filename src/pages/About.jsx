import History from "../common/History";
import AboutNum from "../components/AboutNum";
import FullServices from "../components/FullServices";
import ImageSlider from "../utils/ImageSlider";

function About() {
  return (
    <>
      <History page="About" />
      <div className="w-[82%] m-auto flex flex-col gap-[140px]">
        <div className="flex  justify-between gap-[75px] items-center  ">
          <div className="max-w-[525px]">
            <h2 className="text-[54px] font-semibold font-[inter] mb-10">
              Our Story
            </h2>
            <p className="mb-6">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="w-[705px] h-[610px] bg-[#EB7EA8] rounded max-md:hidden mr-[-160px]"></div>
        </div>
        <AboutNum />
        <ImageSlider />
        <FullServices />
      </div>
    </>
  );
}
export default About;
