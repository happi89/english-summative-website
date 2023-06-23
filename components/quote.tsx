import React from 'react';

const Quote = ({ text, author }: { text: string, author: string }) => {
  return (
    <div className="pl-3 mb-8 border-l-4 border-foreground-500">
      <blockquote className="italic text-brand-primary dark:text-white text-md">
        "{text}"
      </blockquote>
      <p className="mt-2 font-bold text-right text-gray-600">- {author}</p>
    </div>
  );
};

export default Quote;
