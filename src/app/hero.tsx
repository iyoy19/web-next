"use client";

import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full bg-[url('/image/event2.jpeg')] bg-cover bg-no-repeat">
      {/* Overlay Gelap untuk Background */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />

      {/* Kontainer Utama */}
      <div className="relative flex flex-col items-center justify-center h-[90vh] px-4 md:px-20 lg:px-40 pb-10">
        
        {/* Kontainer Teks - Pastikan Teks Tidak Terkena Overlay */}
        <div className="text-center z-10">
          {/* Judul */}
          <Typography variant="h1" color="white" className="mb-4 mt-28 font-bold drop-shadow-lg">
            SIKONDANG
          </Typography>

          {/* Deskripsi */}
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 max-w-2xl mx-auto drop-shadow-md"
          >
            SISTEM INFORMASI KOTA SERANG DALAM ANGKA
          </Typography>
        </div>

        {/* Kotak Pencarian */}
        <div className="relative w-full max-w-lg min-w-[200px] mt-6 z-10">
          <div className="relative flex items-center">
            
            {/* Ikon Search */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="white" 
              className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-400"
            >
              <path 
                fillRule="evenodd" 
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" 
                clipRule="evenodd" 
              />
            </svg>
            
            {/* Input Pencarian */}
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease-in-out focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Cari data..." 
            />
            
            {/* Tombol Search */}
            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 ml-2"
              type="button"
            >
              Search
            </button> 
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
