import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Laundry Service",
    status: "ON THE WAY!",
    arrival: "Arriving in 12 mins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgUfaOdezkXY_59RKH_n-ZA1P2qJIucBNCQ&s",
  },
  {
    id: 2,
    title: "Housekeeping",
    status: "Scheduled",
    arrival: "Arriving in 45 mins",
    image: "https://media.istockphoto.com/id/1221270946/photo/smiling-hotel-maid-with-fresh-towels-doing-housekeeping.jpg?s=612x612&w=0&k=20&c=l418s35_gL5gP-IzB3Ffm2lyLr4up4m-LXc9MIRJfTk=",
  },
  {
    id: 3,
    title: "Room Service",
    status: "Preparing",
    arrival: "Arriving in 20 mins",
    image: "https://media.istockphoto.com/id/1209739507/photo/all-that-you-need-waitress-in-uniform-delivering-tray-with-food-in-a-room-of-hotel-room.jpg?s=612x612&w=0&k=20&c=z90y1f283lp57wFmFX6iRp3yiQ1iLEY8qPPhV6J6pYg=",
  },
];

function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const currentService = services[currentIndex];

  return (
    <div className="relative w-full h-full mx-auto">
      <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-xl text-white shadow-lg p-4 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <img
          src={currentService.image}
          alt={currentService.title}
          className="w-full h-auto max-w-xs rounded-lg object-cover ml-8"
        />
        <div className="flex flex-col flex-grow text-center lg:text-left">
          <p className="font-semibold text-sm md:text-base lg:text-lg">
            {currentService.title}
          </p>
          <p className="text-yellow-400 text-xs md:text-sm">
            {currentService.status}
          </p>
          <p className="text-xs md:text-sm pb-2 md:pb-4">
            {currentService.arrival}
          </p>
          <span className="bg-blue-600 px-2 py-1 text-xs rounded w-fit mx-auto lg:mx-0">
            New
          </span>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full"
      >
        <FiChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full"
      >
        <FiChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default ServicesCarousel;
