import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Director from "./components/Director";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="flex flex-col space-y-8 md:space-y-16 lg:space-y-32">

      <Hero />
      <AboutUs />
      <Gallery />
      <Director />
      <Testimonials />
    </section>
    
  );
}
