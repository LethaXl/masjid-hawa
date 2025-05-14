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
    <header className="bg-green-800 text-white fixed w-full top-0 z-50">
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
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-green-200">
            Home
          </a>
          <a href="#prayer-times" onClick={(e) => scrollToSection(e, 'prayer-times')} className="hover:text-green-200">
            Prayer Times
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-green-200">
            About
          </a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-green-200">
            Services
          </a>
          <a href="#donate" onClick={(e) => scrollToSection(e, 'donate')} className="hover:text-green-200">
            Donate
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-green-200">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-700">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="block py-2 hover:text-green-200"
            >
              Home
            </a>
            <a
              href="#prayer-times"
              onClick={(e) => scrollToSection(e, 'prayer-times')}
              className="block py-2 hover:text-green-200"
            >
              Prayer Times
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="block py-2 hover:text-green-200"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="block py-2 hover:text-green-200"
            >
              Services
            </a>
            <a
              href="#donate"
              onClick={(e) => scrollToSection(e, 'donate')}
              className="block py-2 hover:text-green-200"
            >
              Donate
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block py-2 hover:text-green-200"
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