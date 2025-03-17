import Image from "next/image";
import { Typography, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const SPONSORS = [
  "kominfo.png",
  "pemkot.png",
  "ragempng.png",
  "smartcity.png",
];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-gray-100">
      <div className="container mx-auto flex flex-col gap-6">
        
        {/* Bagian Atas Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Nama */}
          <Typography as="p" variant="h6" className="text-gray-900 text-center md:text-left">
            Sikondang
          </Typography>

          {/* Sponsor Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {SPONSORS.map((logo, key) => (
              <div 
                key={key} 
                className="group transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                <Image
                  src={`/logos/${logo}`}
                  alt={logo.replace(".png", "").replace(".svg", "")}
                  width={100}
                  height={40}
                  className="w-20 md:w-24 h-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-3">
            {["twitter", "youtube", "instagram", "github"].map((icon, idx) => (
              <IconButton
                key={idx}
                size="sm"
                color="gray"
                variant="text"
                className="hover:text-blue-500 transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <i className={`fa-brands fa-${icon} text-lg`} />
              </IconButton>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <Typography color="blue-gray" className="text-center text-gray-700">
          &copy; {CURRENT_YEAR} Sikondang. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
