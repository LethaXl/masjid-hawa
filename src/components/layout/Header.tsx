'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sectionIds = ['home', 'about', 'donate', 'location', 'contact'];
  const headerHeight = 80; // px

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "donate", label: "Donate" },
    { id: "location", label: "Location" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      // Scroll spy logic
      const scrollPosition = window.scrollY + headerHeight + 1;
      let currentSection = sectionIds[0];
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          if (el.offsetTop <= scrollPosition) {
            currentSection = sectionIds[i];
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    // Run on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection('home');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const y = element.offsetTop - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 border-b border-orange-300 shadow-md transition-all duration-300 bg-orange-400 ${isScrolled ? 'backdrop-blur-md frosted-glass' : ''}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home" 
           onClick={(e) => scrollToSection(e, 'home')}
           className="flex items-center gap-2">
          <div className="flex items-center">
            <Image 
              src="/images/favicon1.png" 
              alt="Masjid Hawa Logo" 
              width={40} 
              height={40} 
              className="rounded-full shadow border-2 border-orange-500 bg-white"
              priority
            />
          </div>
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight font-display text-orange-100 drop-shadow-sm" style={{lineHeight: '1.1'}}>
            Masjid Hawa
          </span>
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
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={e => scrollToSection(e, link.id)}
              className={`relative px-5 py-1 text-lg font-semibold transition-all duration-200
                after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-0
                ${activeSection === link.id ? 'text-white after:w-full' : 'hover:text-white hover:bg-orange-500 rounded-full'}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-400 border-b border-orange-300 shadow-md backdrop-blur-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="block py-2 hover:text-orange-200 text-orange-50 font-semibold"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="block py-2 hover:text-orange-200 text-orange-50 font-semibold"
            >
              About
            </a>
            <a
              href="#donate"
              onClick={(e) => scrollToSection(e, 'donate')}
              className="block py-2 hover:text-orange-200 text-orange-50 font-semibold"
            >
              Donate
            </a>
            <a
              href="#location"
              onClick={(e) => scrollToSection(e, 'location')}
              className="block py-2 hover:text-orange-200 text-orange-50 font-semibold"
            >
              Location
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block py-2 hover:text-orange-200 text-orange-50 font-semibold"
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