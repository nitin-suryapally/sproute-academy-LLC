import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

const Gallery: React.FC = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-20 flex flex-col items-center justify-center" id="gallery">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center text-primary">
        Gallery
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 w-full">
        {images.map((img, i) => (
          <div key={i} className="w-full h-64 relative">
            <Image
              src={img}
              alt={`image${i}`}
              fill
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="https://www.instagram.com/sproutsnj?igsh=eGhsbmYwYTEzemdk&utm_source=qr"
          className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition duration-300"
        >
          More Images
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
