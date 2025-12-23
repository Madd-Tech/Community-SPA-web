// src/components/TestimonyCarousel.jsx
import React, { useState, useEffect } from 'react';
import TestimonyCard from "./ReactJSX/Testimonycard.jsx";

// Data Dummy Testimoni
const testimonyData = [
  { id: 1, name: "Hermione Granger", quote: "Lorem ipsum dolor sit amet consectetur adipiscing a nunc mauris scelerisque sed egestas pharetraol quis pharetra ar pharetra blandit." },
  { id: 2, name: "Luna Lovegood", quote: "Pernyataan mereka tentang kami sangat memotivasi. Program yang diberikan sangat bermanfaat dan mudah diikuti. Sangat direkomendasikan!" },
  { id: 3, name: "Cassiopeia Malfoy", quote: "Organisasi ini memiliki tim yang sangat solid dan visioner. Saya merasa terinspirasi oleh dedikasi mereka dalam setiap kegiatan." },
  { id: 4, name: "Ron Weasley", quote: "Pengalaman yang luar biasa! Komunikasi yang baik dan hasil yang melampaui ekspektasi saya. Terus maju!" },
  { id: 5, name: "Draco Malfoy", quote: "Awalnya ragu, tetapi setelah berpartisipasi, saya harus mengakui kualitas kerja mereka. Profesional dan efektif." },
  { id: 6, name: "Ginny Weasley", quote: "Saya sangat senang dengan hasil yang diberikan. Semua berjalan lancar dan terstruktur. Terima kasih banyak!" },
  { id: 7, name: "Neville Longbottom", quote: "Pelayanan yang sangat ramah dan responsif. Mereka mendengarkan setiap masukan dengan serius dan menjadikannya lebih baik." },
];

const TestimonyCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Logika Pagination Chunking
  const totalPages = Math.ceil(testimonyData.length / itemsPerPage);
  
  // Group data into pages
  const slides = [];
  for (let i = 0; i < testimonyData.length; i += itemsPerPage) {
    slides.push(testimonyData.slice(i, i + itemsPerPage));
  }

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const customGradientClasses = `
    bg-gradient-to-br 
    from-sky-500 
    to-indigo-700 
    py-16 
    px-4
    shadow-inner
  `;

  return (
    <section className={customGradientClasses}>
      <div className="max-w-7xl mx-auto container">
        
        {/* Judul Section */}
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Kata Mereka Tentang Kami
          <span className="block w-20 h-1 bg-white mx-auto mt-2"></span>
        </h2>
        
        {/* Carousel Area */}
        <div className="relative group">
          
          {/* Main Slider Window */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {slides.map((slideItems, pageIndex) => (
                <div 
                  key={pageIndex} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className={`grid gap-6 ${itemsPerPage === 1 ? 'grid-cols-1' : 'grid-cols-3'}`}>
                    {slideItems.map((testimony) => (
                      <div key={testimony.id} className="h-full">
                        <TestimonyCard testimony={testimony} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg z-10"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg z-10"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonyCarousel;