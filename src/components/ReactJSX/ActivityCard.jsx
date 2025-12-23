
import React from 'react';

const ActivityCard = ({ activity, onReadMoreClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full flex flex-col transition-transform hover:scale-[1.02]">
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.sinopsis} 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="flex items-center text-gray-500 mb-2">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <p className="text-sm">{activity.date}</p>
        </div>
        <p className="text-base font-semibold text-gray-800 mb-4 flex-grow">
          {activity.sinopsis}
        </p>
        <button 
          onClick={() => onReadMoreClick(activity)}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start mt-auto"
        >
          Read More
        </button>

    
      </div>
    </div>
  );
};

export default ActivityCard;