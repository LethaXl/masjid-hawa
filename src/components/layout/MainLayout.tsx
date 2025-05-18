'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow w-full">
        {children}
      </main>
      <div className="w-full h-30 bg-gradient-to-t from-orange-300 via-orange-200 to-orange-100" />
      <Footer />
    </div>
  );
};

export default MainLayout; 