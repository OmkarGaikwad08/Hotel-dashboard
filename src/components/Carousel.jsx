import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSj4mEzUS1hIC0WqzCsDlO09ud1Pmf3pByzg&s",
    title: "AI Summit 2025",
    subtitle: "Tech Conferences",
    description: "A summit on AI innovations.",
  },
  {
    image: "https://www.therobotreport.com/wp-content/uploads/2025/04/roboticssummit-featured.jpg",
    title: "Future of Robotics",
    subtitle: "Engineering",
    description: "Explore the future of robots.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOu1rrIZJEcsLaDhKQ9UPMtSQlaEDWUSKXw&s",
    title: "Cybersecurity Meet",
    subtitle: "InfoSec",
    description: "Stay ahead in digital security.",
  },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { image, title, subtitle, description } = slides[index];

  return (
    <div className="relative rounded-xl overflow-hidden h-full group">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-6 xl:p-8 text-white">
        <div className="space-y-1 sm:space-y-2">
          <p className="text-xs sm:text-sm md:text-sm lg:text-base opacity-80 font-medium">
            {subtitle}
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-base opacity-90 mt-1 sm:mt-2 max-w-md">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <button className="bg-transparent border border-black-500 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3 rounded-lg font-medium text-sm sm:text-base md:text-base lg:text-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105">
            Book now
          </button>
          <div className="flex gap-2 sm:gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  i === index ? "bg-white shadow-lg" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
