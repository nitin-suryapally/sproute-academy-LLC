'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Director: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="p-10 text-center " id='director'>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-primary">Our Director</h2>
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
                <h3 className="text-xl font-bold">Kathleen McCarthy - Director</h3>
                <p className="mt-2 text-gray-700">
                  My name is Kathleen McCarthy. I was born in Dallas, Texas but raised in Brooklyn, New York. 
                  I am a mother of 4 beautiful daughters. I am a veteran teacher of 20 years. I am the day care 
                  Director / CEO of Alvey's Education Never End Programs Inc. I am a member of Alpha Kappa Alpha 
                  Sorority Incorporated and I model the importance of paying it forward. The more you give to others, 
                  the more you receive overflowing blessings.
                </p>
                <p className="mt-4 text-gray-700">
                  <strong>What I believe in!</strong><br />
                  I believe that family is the key to success. I believe that we are the pilot of our future. 
                  I believe that if you fail to plan, you plan to fail. I believe that if you want something 
                  you never had, you have to do something you've never done. I believe that the key to success is YOU.
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
