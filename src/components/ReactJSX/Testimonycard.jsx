
import React from 'react';

const TestimonyCard = ({ testimony }) => {
  const glassMorphismClasses = `
    bg-white/10 
    backdrop-blur-md 
    border 
    border-white/20 
    rounded-xl 
    p-6 
    shadow-lg 
    text-white 
    h-full 
    flex 
    flex-col 
    transition-transform
    hover:scale-[1.02]
  `;

  return (
    <div className={glassMorphismClasses}>
    
      <div className="flex items-center mb-4">
        <div className="font-bold text-lg">
          {testimony.name}
        </div>
      </div>
      
      
      <p className="italic text-sm leading-relaxed flex-grow">
        "{testimony.quote}"
      </p>
    </div>
  );
};

export default TestimonyCard;