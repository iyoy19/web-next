"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import {discount, il1, } from "../../public";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col ">
      <motion.div
        className="flex-1 flexStart flex-col xl:px-0 paddingX"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}>
          
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          PORTAL SATU DATA <br className="sm:block hidden" />{" "}
            <span className="text-gradient">SIKONDANG</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>

        <p className="paragraph max-w-[470px] mt-5">
        SISTEM INFORMASI KOTA SERANG DALAM ANGKA
        </p>
      </motion.div>

      <motion.div
        className="flex-1 flexCenter md:my-0 my-10 relative"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src={il1}
          alt="billing"
          width={0}
          height={0}
          className="sm:w-[80%] w-[90%] sm:h-[100%] h-[90%] relative z-[5]"
          priority={true}
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[50%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

      <div className="ss:hidden flexCenter">
      </div>
    </section>
  );
};

export default Hero;
