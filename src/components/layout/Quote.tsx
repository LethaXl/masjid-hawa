import React from 'react';

type QuoteProps = {
  text: string;
  author: string;
  className?: string;
};

const Quote: React.FC<QuoteProps> = ({ text, author, className = '' }) => {
  return (
    <div className={`bg-orange-50 rounded-lg border border-gray-200 p-8 relative ${className}`}>
      <div className="absolute top-6 left-6 text-5xl text-orange-200 opacity-70">"</div>
      <div className="absolute bottom-20 right-6 text-5xl text-orange-200 opacity-70">"</div>
      <blockquote className="text-center text-gray-700 text-lg relative z-10 px-6">
        <p className="mb-6 relative">
          {text}
        </p>
        <cite className="block text-red-700 font-medium text-right">--{author}</cite>
      </blockquote>
    </div>
  );
};

export default Quote; 