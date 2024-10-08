'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent shadow-lg fixed w-full z-20 pt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Sprouts Academy
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-gray-300">
              About Us
            </Link>
            <Link href="#gallery" className="text-white hover:text-gray-300">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-white hover:text-gray-300">
              Testimonials
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full bg-black transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            href="/"
            className="block text-2xl text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block text-2xl text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="#gallery"
            className="block text-2xl text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          <Link
            href="#testimonials"
            className="block text-2xl text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
