import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-screen ">
      {/* Responsive background image */}
      <Image
        src="/images/background.jpg"
        alt="background image"
        fill
        className="w-full h-full object-cover -z-10 absolute inset-0"
      />
      
      {/* Centering the content */}
      <div className="items-center justify-center h-full bg-black bg-opacity-80 flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 md:px-0 text-primary">
          Sprouts Academy LLC
        </h1>
        <p className="text-white md:text-lg">Preschool in Linden</p>
        <div className="text-center mt-8">
        <Link
          href="https://www.instagram.com/sproutsnj?igsh=eGhsbmYwYTEzemdk&utm_source=qr"
          className="px-6 py-3 bg-primary text-white text-lg rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Register
        </Link>
      </div>
      </div>
    </section>
  );
};

export default Hero;
