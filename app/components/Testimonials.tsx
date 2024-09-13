'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Updated import for Swiper v8+
import "swiper/css";

const Testimonials: React.FC = () => {
  return (
    <section className="p-10 bg-green-500 text-white" id="testimonials">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">Testimonials</h2>

      {/* Swiper slider for testimonials */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]} // Properly pass the Autoplay module
      >
        {/* Testimonial Slide 1 */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              The best start for our little one!
            </h3>
            <blockquote className="italic text-gray-700">
              Sprouts Academy has truly been a blessing for our family. Our child
              is always excited to go, and we've seen so much growth in their
              social and academic skills. The teachers are attentive, caring, and
              really focus on nurturing every child's unique abilities. We
              couldn't have chosen a better place for our child's early education!
            </blockquote>
          </div>
        </SwiperSlide>

        {/* Testimonial Slide 2 */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Nurturing and enriching environment!
            </h3>
            <blockquote className="italic text-gray-700">
              We love Sprouts Academy! The staff creates a warm, supportive
              environment where our child feels safe and encouraged to explore.
              Their early childhood curriculum is engaging and keeps our little
              one curious and excited to learn. We’ve noticed tremendous progress
              in their language and problem-solving skills. Highly recommended!
            </blockquote>
          </div>
        </SwiperSlide>

        {/* Testimonial Slide 3 */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Amazing teachers and excellent care!
            </h3>
            <blockquote className="italic text-gray-700">
              Sprouts Academy has been an incredible experience for our family.
              The teachers genuinely care about the kids and foster a love of
              learning in a fun and creative way. Our child has made great friends
              and is constantly learning new things. The focus on early childhood
              development is evident in everything they do!
            </blockquote>
          </div>
        </SwiperSlide>

        {/* Testimonial Slide 4 */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              So glad we chose Sprouts Academy!
            </h3>
            <blockquote className="italic text-gray-700">
              From day one, Sprouts Academy has been amazing for our child’s
              growth. The staff is dedicated and communicative, always keeping us
              updated on our child’s progress. Our little one has developed
              important social skills and loves the variety of activities offered.
              We feel confident knowing they are in great hands!
            </blockquote>
          </div>
        </SwiperSlide>

        {/* Testimonial Slide 5 */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Highly recommend for early childhood education!
            </h3>
            <blockquote className="italic text-gray-700">
              Sprouts Academy has exceeded our expectations in every way. The team
              is professional, kind, and skilled in teaching young children. Our
              child is not only thriving academically but also emotionally, thanks
              to the nurturing environment. It’s clear they have a passion for
              early education, and we’re grateful to be part of their community.
            </blockquote>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
