"use client";

import { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

// Data untuk card
const INFO_CARDS = [
  {
    title: "Data Penduduk",
    description: "Informasi terkini mengenai data penduduk di wilayah ini.",
    image: "/image/event1.jpg",
    date: "15 Maret 2025",
    link: "#Data"
  },
  {
    title: "Perekonomian",
    description: "Laporan ekonomi terbaru untuk kemajuan daerah.",
    image: "/image/event2.jpg",
    date: "10 Maret 2025",
    link: "#Ekonomi"
  },
  {
    title: "Pendidikan",
    description: "Statistik dan perkembangan di bidang pendidikan.",
    image: "/image/event3.jpg",
    date: "5 Maret 2025",
    link: "#Pendidikan"
  },
  {
    title: "Kesehatan",
    description: "Update terbaru mengenai layanan kesehatan masyarakat.",
    image: "/image/event4.jpg",
    date: "1 Maret 2025",
    link: "#Kesehatan"
  },
];

// Breakpoints responsif (hanya 3 card tampil sekaligus)
const responsive = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

export function InfoCarousel() {
  const [selectedCard, setSelectedCard] = useState(null);

  // Fungsi untuk menampilkan modal
  const openModal = (card) => {
    setSelectedCard(card);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className="flex flex-col items-center justify-center px-8 py-16 bg-gray-100">
      <Typography variant="h5" className="mb-8 font-bold text-center">
        Informasi Terkini
      </Typography>

      {/* Carousel Container */}
      <div className="w-full max-w-6xl">
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          keyBoardControl
          transitionDuration={800}
          customTransition="transform 500ms ease-in-out"
          removeArrowOnDeviceType={[]}
          showDots={true}
          arrows={true}
          itemClass="px-4"
          dotListClass="flex justify-center mt-4"
          renderDotsOutside={true}
          customDot={<div className="w-8 h-1 bg-gray-400 mx-1 rounded-md"></div>}
        >
          {INFO_CARDS.map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer mx-2"
              onClick={() => openModal(item)}
            >
              <div className="bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden w-64 md:w-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={180}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <Typography variant="h6" className="mb-2 font-bold">
                    {item.title}
                  </Typography>
                  <Typography className="mb-3 text-gray-700 text-sm">
                    {item.description}
                  </Typography>
                  <Typography variant="small" className="text-gray-500">
                    {item.date}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal Popup */}
      {selectedCard && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
          onClick={closeModal} // Klik area latar belakang untuk menutup modal
        >
          <div
            className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg text-center relative"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik di dalam
          >
            <Image
              src={selectedCard.image}
              alt={selectedCard.title}
              width={400}
              height={250}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <Typography variant="h6" className="font-bold">
              {selectedCard.title}
            </Typography>
            <Typography className="mt-2 text-gray-700">
              {selectedCard.description}
            </Typography>
            <Typography variant="small" className="text-gray-500 mt-3">
              {selectedCard.date}
            </Typography>
            <Link href={selectedCard.link} passHref>
              <Button color="blue" className="mt-4 w-full">
                Selengkapnya
              </Button>
            </Link>
            <Button onClick={closeModal} color="gray" className="mt-2 w-full">
              Tutup
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default InfoCarousel;
