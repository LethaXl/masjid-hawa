'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-orange-600 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" 
           onClick={(e) => scrollToSection(e, 'home')}
           className="flex items-center">
          <span className="text-xl font-bold">Masjid Hawa</span>
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-orange-200">
            Home
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-orange-200">
            About
          </a>
          <a href="#donate" onClick={(e) => scrollToSection(e, 'donate')} className="hover:text-orange-200">
            Donate
          </a>
          <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className="hover:text-orange-200">
            Location
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-orange-200">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-500">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="block py-2 hover:text-orange-200"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="block py-2 hover:text-orange-200"
            >
              About
            </a>
            <a
              href="#donate"
              onClick={(e) => scrollToSection(e, 'donate')}
              className="block py-2 hover:text-orange-200"
            >
              Donate
            </a>
            <a
              href="#location"
              onClick={(e) => scrollToSection(e, 'location')}
              className="block py-2 hover:text-orange-200"
            >
              Location
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block py-2 hover:text-orange-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 