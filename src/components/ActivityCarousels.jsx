// src/components/ActivityCarousel.jsx
import React, { useState, useEffect } from 'react';
import ActivityCard from './ReactJSX/ActivityCard.jsx';
import ActivityModal from './ActivityModal.jsx';
import activityData from './ReactJSX/ActivityItems.jsx';

const ActivityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalActivity, setModalActivity] = useState(null);
  const [itemsVisible, setItemsVisible] = useState(1);

  // Update itemsVisible based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsVisible(3); // Desktop
      } else if (window.innerWidth >= 640) {
        setItemsVisible(2); // Tablet
      } else {
        setItemsVisible(1); // Mobile
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = activityData.length;
  const maxIndex = Math.max(0, totalItems - itemsVisible);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToIndex = (index) => {
      // Ensure index is within bounds
      const validIndex = Math.min(Math.max(0, index), maxIndex);
      setCurrentIndex(validIndex);
  }

  const openModal = (activity) => {
    setModalActivity(activity);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalActivity(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-bold text-center mb-12">
          Kegiatan Terbaru
          <span className="block w-16 h-1 bg-gray-400 mx-auto mt-2"></span>
        </h2>
        
        <div className="relative">
          
          <div className="overflow-hidden p-2">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
              }}
            >
              {activityData.map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex-shrink-0 px-3 md:px-4 lg:px-6 box-border"
                  style={{ width: `${100 / itemsVisible}%` }}
                >
                  <ActivityCard 
                    activity={activity} 
                    onReadMoreClick={openModal} 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Indicators / Dots */}
        <div className="flex justify-center mt-8 flex-wrap gap-2 px-4">
          {Array.from({ length: totalItems - itemsVisible + 1 }, (_, index) => (
             <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to item ${index + 1}`}
             />
          ))}
        </div>
        
        <div className="flex justify-center mt-6 space-x-4">
            <button
                onClick={goToPrev}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition shadow-md"
                aria-label="Halaman Sebelumnya"
            >
                &larr; Sebelumnya
            </button>
            <button
                onClick={goToNext}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition shadow-md"
                aria-label="Halaman Berikutnya"
            >
                Berikutnya &rarr;
            </button>
        </div>

      </div>

      <ActivityModal activity={modalActivity} onClose={closeModal} />
    </section>
  );
};

export default ActivityCarousel;