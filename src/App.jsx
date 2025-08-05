import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ServicesList from "./components/ServicesCarousel";
import HeaderBar from "./components/HeaderBar";
import { FiSliders, FiHome, FiCalendar } from "react-icons/fi";
import { MdDirectionsCar } from "react-icons/md";

function App() {
  const actions = [
    { label: "Smart controls", icon: <FiSliders /> },
    { label: "Room Service", icon: <FiHome /> },
    { label: "Valet Service", icon: <MdDirectionsCar /> },
    { label: "Table Booking", icon: <FiCalendar /> },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww')",
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="flex-grow relative z-20 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-6 space-y-6 min-h-screen flex flex-col">
        <HeaderBar />
        <Header />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {actions.map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-xl py-4 sm:py-5 md:py-8 hover:bg-white/20 transition text-white shadow-lg w-full"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">{action.icon}</div>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">{action.label}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-6 flex-grow">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="w-full h-14 sm:h-16 md:h-20 lg:h-48 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition text-white shadow-lg flex items-center justify-center">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans">Available Service</span>
            </div>
            <div className="flex-grow">
              <ServicesList />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-grow">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
