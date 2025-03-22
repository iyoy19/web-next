"use client";

import React from "react";
import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import Informasi from "./informasi";
import AboutEvent from "./about-event";
import EventContent from "./event-content";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <EventContent />
      <Informasi />
      <Footer />
    </>
  );
};

export default Page;
