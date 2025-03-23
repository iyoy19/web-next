"use client";

import { Typography } from "@material-tailwind/react";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { FcStatistics } from "react-icons/fc";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/navigation"; // Gunakan useRouter untuk navigasi
import "react-multi-carousel/lib/styles.css";

// Data untuk card
const EVENT_INFO = [
  {
    title: "Statistik",
    subTitle: "Statistik Sektoral",
    icon: <FcStatistics className="text-blue-500 text-7xl" />,
    bgColor: "bg-blue-100",
    link: "/statistik",
  },
  {
    title: "Geospasial",
    subTitle: "Kota-Serang",
    icon: <GiEarthAsiaOceania className="text-green-500 text-7xl" />,
    bgColor: "bg-green-100",
    link: "/geospasial",
  },
  {
    title: "Perencanaan",
    subTitle: "Perencanaan",
    icon: <GoChecklist className="text-red-500 text-7xl" />,
    bgColor: "bg-red-100",
    link: "/perencanaan",
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
  const router = useRouter(); // Inisialisasi useRouter

  return (
    <section
      className="relative flex flex-col items-center justify-center px-4 py-16 pt-2 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/event1.jpg')" }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-gray-900/10"></div>

      {/* Konten utama */}
      <div className="relative z-10 text-center text-white w-full max-w-6xl">
        <Typography
          variant="h5"
          className="mb-8 font-bold pt-5"
          placeholder=""
        >
          PORTAL
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
              className="flex flex-col items-center justify-center h-60 bg-white text-gray-900 rounded-xl shadow-lg p-8 mx-3 transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => router.push(event.link)} // Navigasi ke halaman terkait
            >
              {/* Icon dalam lingkaran */}
              <div className={`mb-6 flex items-center justify-center w-24 h-24 rounded-full ${event.bgColor}`}>
                {event.icon}
              </div>

              {/* Konten */}
              <Typography variant="h5" className="font-semibold text-center">
                {event.title}
              </Typography>
              <Typography variant="small" className="text-gray-600 text-center">
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
