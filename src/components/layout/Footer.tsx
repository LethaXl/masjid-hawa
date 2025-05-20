'use client';

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="text-center">
            <p className="mb-1 text-sm">2829 Eglinton Ave E</p>
            <p className="mb-1 text-sm">Scarborough, ON, M1J 2E1</p>
            <p className="mb-1 text-sm">+1 (647) 779-3313</p>
            <p className="mb-1 text-sm">masjidhawa786@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-orange-300 mt-4 pt-2 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Masjid Hawa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 