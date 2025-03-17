// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Informasi, { InfoCarousel } from "./informasi";
import AboutEvent from "./about-event";
import EventContent from "./event-content";

export default function Portfolio() {
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
}
