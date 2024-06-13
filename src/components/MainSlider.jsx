import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function MainSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3500); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]); // Clear interval when component unmounts or currentIndex changes
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === slides.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const slides = [
    {
      image: "iphone.png",
      brand: "apple.png",
      name: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
    },
    {
      image: "samsung.png",
      brand: "samsung logo.png",
      name: "Samsung Galaxy S21",
      subtitle: "Limited Time Offer until next month",
    },
    {
      image: "iphone.png",
      brand: "apple.png",
      name: "iPhone 14 Series",
      subtitle: "Up to 10% off Voucher",
    },
    {
      image: "samsung.png",
      brand: "samsung logo.png",
      name: "Samsung Galaxy S21",
      subtitle: "Limited Time Offer until next month",
    },
  ];

  return (
    <div className="h-full relative text-white min-h-[344px] flex-1 my-auto bg-black mb-0 ">
      <div className=" flex items-center justify-between px-16 py-4 ">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-6">
            <img
              src={slides[currentIndex].brand}
              alt={`${slides[currentIndex].name} brand icon`}
              loading="lazy"
            />
            <span>{slides[currentIndex].name}</span>
          </div>
          <span className="text-5xl font-semibold leading-[60px]">
            {slides[currentIndex].subtitle}
          </span>
          <div className="flex gap-2 items-center">
            <Link
              to="/all-products"
              className="hover:underline hover:underline-offset-8 font-semibold"
            >
              Shop Now
            </Link>
            <img src="arrow-right.png" alt="arrow icon" loading="lazy" />
          </div>
        </div>
        <img
          className="w-[250px]"
          src={slides[currentIndex].image}
          alt={`${slides[currentIndex].name} product image`}
          loading="lazy"
        />
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? "bg-red-500" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default MainSlider;
