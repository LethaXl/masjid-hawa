import React from 'react';
import { useScreenSize } from '@/hooks/useScreenSize';

type QuoteProps = {
  text: string;
  author: string;
  className?: string;
};

const Quote: React.FC<QuoteProps> = ({ text, author, className = '' }) => {
  const { isMobileSConstrainedView } = useScreenSize();
  return (
    <div
      className={`bg-orange-50 rounded-lg border border-gray-200 relative ${className} ${isMobileSConstrainedView ? 'px-2 max-w-[99vw]' : 'p-8 max-w-xl'} mx-auto`}
    >
      {isMobileSConstrainedView ? (
        <>
          <div className="absolute top-1 left-1 text-3xl text-orange-200 opacity-70 font-accent">"</div>
          <div className="absolute bottom-1 right-1 text-3xl text-orange-200 opacity-70 font-accent">"</div>
        </>
      ) : (
        <>
          <div className="absolute top-6 left-6 text-5xl text-orange-200 opacity-70 font-accent">"</div>
          <div className="absolute bottom-20 right-6 text-5xl text-orange-200 opacity-70 font-accent">"</div>
        </>
      )}
      <blockquote className="text-center text-gray-700 relative z-10 px-2 sm:px-6 font-accent italic text-s sm:text-sm md:text-lg">
        <p className="mb-6 relative">
          {text}
        </p>
        <cite className="block text-red-700 font-semibold text-right font-display not-italic text-s sm:text-sm md:text-lg">—{author}</cite>
      </blockquote>
    </div>
  );
};

export default Quote; 