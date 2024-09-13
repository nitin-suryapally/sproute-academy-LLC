"use client";
import React, { useState } from "react";
import Image from "next/image";

const Director: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="p-10 text-center " id="director">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-primary">
        Our Director
      </h2>
      <Image
        src="/images/director.jpg"
        alt="Director"
        width={300}
        height={300}
        className="mx-auto rounded-3xl"
      />
      <button
        onClick={() => setShowModal(true)}
        className="mt-8 px-4 py-2 bg-green-500 text-white rounded"
      >
        Meet Our Director
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 sm:mx-auto">
            <div className="relative p-6 flex flex-col items-center">
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                <span className="text-2xl">&times;</span>
              </button>

              {/* Director's Image */}
              <Image
                src="/images/director.jpg"
                alt="Director"
                width={200}
                height={200}
                className="rounded-3xl"
              />

              {/* Director's Info */}
              <div className="mt-4 text-center text-black">
                <h3 className="text-xl font-bold">
                  Kathleen McCarthy - Director
                </h3>
                <p className="mt-2 text-gray-700">
                  My name is Kathleen McCarthy. I was born in Elizabeth, NJ, and
                  raised in Linden, NJ. I am the proud mother of two wonderful
                  children, Hope and Brandon, and I have a dog named Taz.
                </p>
                <p className="mt-2 text-gray-700">
                  I’ve been in the teaching field since I was 18 years old, and
                  I am currently the Director of Sprouts Academy in Linden, NJ.
                  In addition, I am an Auxiliary member of the Linden American
                  Legion and a staff member at the Roselle Park Post 60 American
                  Legion.
                </p>
                <p className="mt-4 text-gray-700">
                  <strong>What I believe in!</strong>
                  <br />
                  My life’s platform has always been about helping children
                  reach their full potential through kindness and sharing. I
                  believe that strong family support is the foundation for a
                  bright future. I encourage others to work hard, stay focused,
                  ask for help when needed, and always keep a
                  glass-half-full mindset!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Director;
