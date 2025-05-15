import React from 'react';

type QuoteProps = {
  text: string;
  author: string;
  className?: string;
};

const Quote: React.FC<QuoteProps> = ({ text, author, className = '' }) => {
  return (
    <div className={`bg-orange-50 rounded-lg border border-gray-200 p-8 relative ${className}`}>
      <div className="absolute top-2 left-2 text-6xl text-orange-200">"</div>
      <div className="absolute bottom-2 right-4 text-6xl text-orange-200">"</div>
      <blockquote className="text-center text-gray-700 text-lg relative z-10 px-6">
        <p className="mb-6">{text}</p>
        <cite className="block text-orange-700 font-medium text-right">--{author}</cite>
      </blockquote>
    </div>
  );
};

export default Quote; 