// import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
function ImageSlider() {
  const slides = [
    {
      url: "person1.png",
      name: "Tom Crusie",
      job: "Founder & Chairman",
    },
    {
      url: "person2.png",
      name: "Emad Hassan",
      job: "Managing Director",
    },
    {
      url: "person1.png",
      name: "Khedr Karweta",
      job: "Product Designer",
    },
    {
      url: "person2.png",
      name: "Kamr Aldin Dbyaza",
      job: "Frontend Developer",
    },
    {
      url: "person1.png",
      name: "Abd Alaziz Shesha",
      job: "Backend Developer",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="mb-20 ">
        <Slider {...settings}>
          {slides.map((card, index) => (
            <div key={index} className=" w-[370px] flex  justify-center">
              <div className=" bg-[var(--bg-gray)] flex items-end  justify-center mb-8">
                <img
                  className=" pt-10 px-6 h-[392px]  "
                  src={card.url}
                  alt={`${card.name} icon`}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[32px] font-semibold font-[inter] mb-2">
                  {card.name}
                </p>
                <p className="mb-4">{card.job}</p>
                <div className="flex items-center gap-4">
                  <a href="#">
                    <img
                      loading="lazy"
                      className="hover:scale-110"
                      src="Icon-Twitter.png"
                      alt="twitter icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      loading="lazy"
                      className="hover:scale-110"
                      src="icon-instagram.png"
                      alt="insta icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      loading="lazy"
                      className="hover:scale-110"
                      src="Icon-Linkedin.png"
                      alt="linkedin icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default ImageSlider;
/*const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    currentIndex <= 2
      ? setCurrentIndex(slides.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };
  const goToNext = () => {
    currentIndex === slides.length - 2
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };
  const navigateToImage = (i) => {
    setCurrentIndex(i);
  };
  return (
    <div className="h-full relative ">
      <button
        className=" absolute top-1/2 translate-y-1/2 left-8 text-7xl text-red-500 z-10 cursor-pointer"
        onClick={goToPrevious}
      >
        «
      </button>
      <button
        className="absolute top-1/2 translate-y-1/2 right-8 text-7xl text-red-500 z-10 cursor-pointer"
        onClick={goToNext}
      >
        »
      </button>
      <div className="flex gap-8  justify-center">
        <div className="  w-[370px] flex justify-end flex-col items-center  rounded bg-center  bg-no-repeat bg-gray-200">
          <img
            className="h-[360px]"
            src={slides[currentIndex].url}
            alt="image of person"
          />
        </div>
        {slides[currentIndex + 1] && (
          <div className="  w-[370px] flex justify-end flex-col items-center  rounded bg-center  bg-no-repeat bg-gray-200">
            <img
              className="h-[360px]"
              src={slides[currentIndex + 1].url}
              alt="image of person"
            />
          </div>
        )}
        {slides[currentIndex + 2] && (
          <div className="  w-[370px] flex justify-end flex-col items-center  rounded bg-center  bg-no-repeat bg-gray-200">
            <img
              className="h-[360px]"
              src={slides[currentIndex + 2].url}
              alt="image of person"
            />
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((slide, slideIndex) => {
          return (
            <button
              className={` w-5 h-5 bg-black rounded-full m-1 ${
                slideIndex === currentIndex ? "bg-red-500" : ""
              } `}
              key={slideIndex}
              onClick={() => navigateToImage(slideIndex)}
            ></button>
          );
        })}
      </div>
    </div>
  );*/
// ImageSlider.jsimport React from 'react';

// import React from "react";
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Slide = ({ children }) => (
//   <div style={{ padding: "0 10px" }}>{children}</div>
// );

// const NextArrow = ({ onClick }) => (
//   <button
//     className="slick-arrow slick-next"
//     onClick={onClick}
//     style={{ color: "red" }}
//   >
//     <FaChevronRight />
//   </button>
// );

// const PrevArrow = ({ onClick }) => (
//   <button
//     className="slick-arrow slick-prev"
//     onClick={onClick}
//     style={{ color: "blue" }}
//   >
//     <FaChevronLeft />
//   </button>
// );

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />,
// };

// const items = [
//   { id: 1, text: "Item 1" },
//   { id: 2, text: "Item 2" },
//   { id: 3, text: "Item 3" },
//   { id: 4, text: "Item 4" },
//   { id: 5, text: "Item 5" },
//   { id: 6, text: "Item 6" },
// ];

// const App = () => {
//   return (
//     <div>
//       <h2>Slick Multiple Items Slider</h2>
//       <Slider {...settings}>
//         {items.map((item) => (
//           <Slide key={item.id}>
//             <h3>{item.text}</h3>
//           </Slide>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default App;
