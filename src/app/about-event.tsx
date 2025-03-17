"use client";

import { Typography } from "@material-tailwind/react";
import { FaMicrophone, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Data untuk card
const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    subTitle: "Presentation",
    icon: <FaMicrophone className="text-blue-500 text-7xl" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Practical Knowledge!",
    subTitle: "Workshops",
    icon: <FaChalkboardTeacher className="text-green-500 text-7xl" />,
    bgColor: "bg-green-100",
  },
  {
    title: "Networking Opportunities!",
    subTitle: "Networking",
    icon: <FaUsers className="text-red-500 text-7xl" />,
    bgColor: "bg-red-100",
  },
];

// Responsive Breakpoints untuk Carousel
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export function AboutEvent() {
  return (
    <section
      className="relative flex flex-col items-center justify-center px-4 py-16 pt-2 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/event1.jpg')" }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gray-900/10"></div>

      {/* Konten utama */}
      <div className="relative z-10 text-center text-white w-full max-w-6xl">
        <Typography variant="h5" className="mb-8 font-bold pt-5" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Statistik Portal
        </Typography>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000} // Slide setiap 2 detik
          keyBoardControl={true}
          transitionDuration={1000} // Animasi slide lebih halus
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {EVENT_INFO.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center h-60 bg-white text-gray-900 rounded-xl shadow-lg p-8 mx-3 transition-transform duration-300 hover:scale-105"
            >
              {/* Icon dalam lingkaran */}
              <div className={`mb-6 flex items-center justify-center w-24 h-24 rounded-full ${event.bgColor}`}>
                {event.icon}
              </div>

              {/* Konten */}
              <Typography variant="h5" className="font-semibold text-center"placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                {event.title}
              </Typography>
              <Typography variant="small" className="text-gray-600 text-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                {event.subTitle}
              </Typography>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default AboutEvent;
