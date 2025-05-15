'use client';

import Link from 'next/link';

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-orange-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Masjid Hawa</h3>
            <p className="mb-2">2829 Eglinton Ave E</p>
            <p className="mb-2">Scarborough, ON, M1J 2E1</p>
            <p className="mb-2">+1 (647) 779-3313</p>
            <p className="mb-2">masjidhawa786@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-orange-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Masjid Hawa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 