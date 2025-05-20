'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useScreenSize } from '@/hooks/useScreenSize';

// Move these outside the Header component
const sectionIds = ['home', 'about', 'donate', 'location', 'contact'];
const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "donate", label: "Donate" },
  { id: "location", label: "Location" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileTabsOpen, setIsMobileTabsOpen] = useState(false);
  const [showMobileTabs, setShowMobileTabs] = useState(false);
  const [tabVis, setTabVis] = useState([false, false, false, false, false]);
  const headerRef = useRef<HTMLDivElement>(null);
  const { 
    isMobileSConstrainedView, 
    isMobileMConstrainedView, 
    isMobileLConstrainedView, 
    isMobileXLConstrainedView 
  } = useScreenSize();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      // Scroll spy logic
      const scrollPosition = window.scrollY + 64 + 1;
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
  }, []); // sectionIds is now a constant

  useEffect(() => {
    if (isMobileTabsOpen) {
      setShowMobileTabs(true);
      // Stagger in
      navLinks.forEach((_, i) => {
        setTimeout(() => setTabVis(v => v.map((val, idx) => idx <= i ? true : val)), i * 70);
      });
    } else {
      // Stagger out
      setTabVis([false, false, false, false, false]);
      const timeout = setTimeout(() => setShowMobileTabs(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isMobileTabsOpen]); // navLinks is now a constant

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    let headerHeight = 0;
    if (headerRef.current) {
      headerHeight = headerRef.current.offsetHeight;
    }
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed w-full top-0 z-50 border-b border-orange-300 shadow-md transition-all duration-300 bg-orange-400 ${isScrolled ? 'backdrop-blur-md frosted-glass' : ''}`}
      style={{ height: '64px' }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-full">
        <a href="#home" 
           onClick={(e) => scrollToSection(e, 'home')}
           className="flex items-center gap-2">
          <div className="flex items-center">
            <Image 
              src="/images/favicon1.png" 
              alt="Masjid Hawa Logo" 
              width={isMobileSConstrainedView ? 32 : isMobileMConstrainedView ? 36 : isMobileLConstrainedView ? 38 : isMobileXLConstrainedView ? 40 : 40} 
              height={isMobileSConstrainedView ? 32 : isMobileMConstrainedView ? 36 : isMobileLConstrainedView ? 38 : isMobileXLConstrainedView ? 40 : 40} 
              className="rounded-full shadow border-2 border-orange-500 bg-white"
              priority
            />
          </div>
          <span className={`font-extrabold tracking-tight font-display text-orange-100 drop-shadow-sm ${isMobileSConstrainedView ? 'text-xl' : isMobileMConstrainedView ? 'text-2xl' : isMobileLConstrainedView ? 'text-2xl' : isMobileXLConstrainedView ? 'text-2xl' : 'text-3xl'}`} style={{lineHeight: '1.1'}}>
            Masjid Hawa
          </span>
        </a>

        <div className="relative flex items-center">
          <button
            className="md:hidden z-50 relative text-white"
            aria-label={isMobileTabsOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMobileTabsOpen(!isMobileTabsOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`${isMobileSConstrainedView ? 'w-6 h-6' : isMobileMConstrainedView ? 'w-6 h-6' : isMobileLConstrainedView ? 'w-7 h-7' : isMobileXLConstrainedView ? 'w-7 h-7' : 'w-7 h-7'}`}
            >
              {isMobileTabsOpen ? (
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
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-3 lg:space-x-8">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={e => scrollToSection(e, link.id)}
              className={`relative px-5 md:px-2 lg:px-5 py-1 text-lg md:text-base lg:text-lg font-semibold transition-all duration-200
                after:content-[''] after:block after:h-0.5 after:bg-white after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-0
                ${activeSection === link.id ? 'text-white after:w-full' : 'hover:text-white hover:bg-orange-500 rounded-full after:w-0'}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Tab Navigation */}
      {showMobileTabs && (
        <nav className="md:hidden w-full flex justify-center -mt-2 z-40 relative" style={{ pointerEvents: 'auto' }}>
          <div className="flex justify-center gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={e => scrollToSection(e, link.id)}
                className={`rounded-b-lg font-semibold transition-all duration-300 whitespace-nowrap text-center shadow-lg border backdrop-blur-sm
                  ${
                    isMobileSConstrainedView ? 'px-2 py-1 text-xs max-w-[60px] min-w-[40px]' : 
                    isMobileMConstrainedView ? 'px-3 py-1 text-xs max-w-[65px] min-w-[45px]' :
                    isMobileLConstrainedView ? 'px-4 py-2 text-xs max-w-[80px] min-w-[60px]' :
                    isMobileXLConstrainedView ? 'px-4 py-2 text-xs max-w-[85px] min-w-[65px]' :
                    'px-4 py-2 text-xs max-w-[90px] min-w-[60px]'
                  }
                  ${activeSection === link.id
                    ? 'bg-orange-400/90 text-white border-orange-200'
                    : 'bg-white/70 text-orange-900 border-orange-100'}
                  ${tabVis[i]
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'}
                `}
                style={{
                  marginLeft: '2px',
                  marginRight: '2px',
                  transitionProperty: 'opacity',
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 